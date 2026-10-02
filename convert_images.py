"""Convert all product images to fast WebP (full + thumbnail).

Usage (in the project folder, next to index.html):
    pip install pillow        (first time only)
    python convert_images.py

For every images/<section>/<number>.(png|jpg|jpeg) it creates:
    images/<section>/<number>.webp          (full size, max 1000x1400)
    images/<section>/thumb/<number>.webp    (small, for the product grid)
Your original files are NOT deleted. Move them to a backup folder after checking the site.
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent / "images"
SECTIONS = ["casual", "lingerie", "babywear", "sport"]
done = 0
for sec in SECTIONS:
    d = ROOT / sec
    if not d.is_dir():
        print(f"!! folder not found: {d}")
        continue
    (d / "thumb").mkdir(exist_ok=True)
    for f in sorted(d.iterdir()):
        if not f.is_file() or f.suffix.lower() not in (".png", ".jpg", ".jpeg") or not f.stem.isdigit():
            continue
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        full = im.copy(); full.thumbnail((1000, 1400))
        full.save(d / f"{f.stem}.webp", "WEBP", quality=80, method=6)
        th = im.copy(); th.thumbnail((400, 540))
        th.save(d / "thumb" / f"{f.stem}.webp", "WEBP", quality=75, method=6)
        done += 1
        print("ok", sec, f.name)
print(f"\nDone: {done} images converted.")
