"""Generate the decorative Costa wireframe using only the Python standard library.

Gray's parametrization: https://mathworld.wolfram.com/CostaMinimalSurface.html
Square lattice periods: 1 and i. Elliptic functions use convergent theta series.
Run from the project root: python3 scripts/generate-costa.py
"""
import cmath
import json
import math
from pathlib import Path

PI = math.pi

def elliptic(z):
    m, n = math.floor(z.real + .5), math.floor(z.imag + .5)
    w = z - complex(m, n)
    if abs(w) < 1e-10:
        raise ValueError('Lattice pole')
    sine = cmath.sin(PI * w)
    zeta = PI * w + PI * cmath.cos(PI * w) / sine
    wp = -PI + PI**2 / sine**2
    for k in range(1, 15):
        coefficient = math.exp(-2 * PI * k) / (1 - math.exp(-2 * PI * k))
        zeta += 4 * PI * coefficient * cmath.sin(2 * PI * k * w)
        wp -= 8 * PI**2 * k * coefficient * cmath.cos(2 * PI * k * w)
    return zeta + PI * complex(m, -n), wp

E1 = elliptic(.5)[1].real

def costa(u, v):
    z = complex(u, v)
    zeta, wp = elliptic(z)
    difference = PI / (2 * E1) * (elliptic(z - .5)[0] - elliptic(z - .5j)[0])
    x = (-zeta + PI * u + PI**2 / (4 * E1) + difference).real / 2
    y = (-1j * zeta + PI * v + PI**2 / (4 * E1) - 1j * difference).real / 2
    height = math.sqrt(2 * PI) / 4 * math.log(abs((wp - E1) / (wp + E1)))
    return x, y, height

# Verify lattice periodicity before sampling the punctured torus.
for u, v in [(.17, .29), (.31, .41)]:
    p = costa(u, v)
    for du, dv in [(1, 0), (0, 1)]:
        assert max(abs(a-b) for a,b in zip(p, costa(u+du, v+dv))) < 1e-9

lines = []
for axis in [0, 1]:
    for j in range(40):
        fixed = (j + .5) / 40
        strip = []
        for k in range(121):
            moving = k / 120
            try:
                p = costa(fixed, moving) if axis == 0 else costa(moving, fixed)
                # Truncate the three unbounded ends to a consistent circular rim.
                valid = math.hypot(p[0], p[1]) <= 3.6 and abs(p[2]) <= 2.8
            except (ValueError, ZeroDivisionError):
                valid = False
            if valid:
                strip.append([round(c, 6) for c in p])
            else:
                if len(strip) > 1:
                    lines.append(strip)
                strip = []
        if len(strip) > 1:
            lines.append(strip)
Path('src/data/costa-mesh.json').write_text(json.dumps(lines, separators=(',', ':'))+'\n')
print(f'Costa mesh: {len(lines)} strips; lattice periodicity verified.')
