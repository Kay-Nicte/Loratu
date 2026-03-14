import React from 'react';
import { Rect, Line, Group, vec } from '@shopify/react-native-skia';
import { colors } from '../../constants/theme';

interface Props {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Draws an Andalusian azulejo tile floor pattern */
export default function TileFloor({ x, y, width, height }: Props) {
  const tileSize = 32;
  const cols = Math.ceil(width / tileSize);
  const rows = Math.ceil(height / tileSize);

  const tiles: React.JSX.Element[] = [];

  // Base floor
  tiles.push(
    <Rect key="base" x={x} y={y} width={width} height={height} color="#F5ECD7" />
  );

  // Tile grid pattern
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const tx = x + c * tileSize;
      const ty = y + r * tileSize;
      const isAlternate = (r + c) % 2 === 0;

      if (isAlternate) {
        // Blue diamond accent
        tiles.push(
          <Rect
            key={`t-${r}-${c}`}
            x={tx + tileSize * 0.25}
            y={ty + tileSize * 0.25}
            width={tileSize * 0.5}
            height={tileSize * 0.5}
            color={colors.tileBlue}
            opacity={0.12}
            transform={[{ rotate: Math.PI / 4 }]}
            origin={vec(tx + tileSize / 2, ty + tileSize / 2)}
          />
        );
      }
    }
  }

  // Grid lines
  for (let r = 0; r <= rows; r++) {
    tiles.push(
      <Line
        key={`hr-${r}`}
        p1={vec(x, y + r * tileSize)}
        p2={vec(x + width, y + r * tileSize)}
        color={colors.wallShadow}
        strokeWidth={0.5}
        opacity={0.3}
      />
    );
  }
  for (let c = 0; c <= cols; c++) {
    tiles.push(
      <Line
        key={`vc-${c}`}
        p1={vec(x + c * tileSize, y)}
        p2={vec(x + c * tileSize, y + height)}
        color={colors.wallShadow}
        strokeWidth={0.5}
        opacity={0.3}
      />
    );
  }

  return <Group>{tiles}</Group>;
}
