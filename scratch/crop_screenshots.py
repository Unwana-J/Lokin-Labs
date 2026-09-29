from PIL import Image
import os

base_dir = "/Users/afangbender/Downloads/Lokin-Lab/public/screenshots"

files = [
    ("fey-dashboard.png", "fey-dashboard-cropped.png", (240, 0, 1440, 813)),
    ("fey-games.png", "fey-games-cropped.png", (240, 0, 1440, 813)),
    ("fey-constellation.png", "fey-constellation-cropped.png", (240, 0, 1440, 813)),
    ("fey-discover.png", "fey-discover-cropped.png", (240, 0, 1440, 813)),
]

for src_name, dst_name, box in files:
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(base_dir, dst_name)
    if os.path.exists(src_path):
        im = Image.open(src_path)
        cropped = im.crop(box)
        cropped.save(dst_path, "PNG", optimize=True)
        print(f"Saved {dst_name}: {cropped.size}")
