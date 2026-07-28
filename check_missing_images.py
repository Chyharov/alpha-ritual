import re
from pathlib import Path

root = Path('src').resolve()
source_exts = {'.js', '.jsx', '.ts', '.tsx', '.scss', '.css'}
image_exts = {'.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'}
patterns = [
    r"(?:import|require)\s+[^'\"]*['\"]([^'\"]+\.(?:png|jpe?g|svg|webp|gif))['\"]",
    r"url\(([^)]+\.(?:png|jpe?g|svg|webp|gif))\)"
]

source_files = [p for p in root.rglob('*') if p.is_file() and p.suffix.lower() in source_exts]
image_files = [p for p in root.rglob('*') if p.is_file() and p.suffix.lower() in image_exts]

for f in source_files:
    try:
        text = f.read_text(encoding='utf-8')
    except Exception:
        continue
    for pat in patterns:
        for m in re.finditer(pat, text):
            ref = m.group(1)
            if ref.startswith(('http://', 'https://', 'data:')):
                continue
            ref = ref.split('?')[0].split('#')[0]
            if ref.startswith('.'):
                candidate = (f.parent / ref).resolve()
            elif ref.startswith('/'):
                candidate = (root / ref.lstrip('/')).resolve()
            elif ref.startswith(('images/', 'components/')):
                candidate = (root / ref).resolve()
            else:
                candidate = (f.parent / ref).resolve()

            if candidate.exists():
                continue

            parent = candidate.parent
            same_name_matches = []
            if parent.exists():
                for item in parent.iterdir():
                    if item.is_file() and item.name.lower() == candidate.name.lower():
                        same_name_matches.append(item)

            if same_name_matches:
                print(f'{f.relative_to(Path.cwd())}: {ref} -> CASE_MISMATCH -> {same_name_matches[0].relative_to(Path.cwd())}')
            else:
                print(f'{f.relative_to(Path.cwd())}: {ref} -> MISSING')
