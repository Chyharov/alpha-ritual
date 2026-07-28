import re
from pathlib import Path
root = Path('src')
patterns = [
    r"(?:import|require)\s+[^'\"]*['\"]([^'\"]+\.(?:png|jpe?g|svg|webp|gif))['\"]",
    r"url\(([^)]+\.(?:png|jpe?g|svg|webp|gif))\)"
]
files = [p for p in root.rglob('*') if p.is_file() and p.suffix.lower() in {'.js', '.jsx', '.ts', '.tsx', '.scss', '.css'}]
for f in files:
    try:
        text = f.read_text(encoding='utf-8')
    except Exception:
        continue
    for pat in patterns:
        for m in re.finditer(pat, text):
            p = m.group(1)
            if p.startswith(('http://', 'https://', 'data:')):
                continue
            p = p.split('?')[0].split('#')[0]
            if p.startswith('.'):
                candidate = (f.parent / p).resolve()
            elif p.startswith('/'):
                candidate = (root / p.lstrip('/')).resolve()
            elif p.startswith(('images/', 'components/')):
                candidate = (root / p).resolve()
            else:
                candidate = (f.parent / p).resolve()
            if not candidate.exists():
                print(f'{f.relative_to(Path.cwd())}: {p} -> MISSING -> {candidate.relative_to(Path.cwd())}')
