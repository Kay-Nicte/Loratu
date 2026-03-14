import { useMemo } from 'react';
import {
  Group, Rect, RoundedRect, Circle, Oval,
  LinearGradient, vec,
} from '@shopify/react-native-skia';
import { colors } from '../../constants/theme';

interface Props {
  cx: number;
  cy: number;
  size: number;
}

/** Draws an Andalusian stone fountain */
export default function Fountain({ cx, cy, size }: Props) {
  const basinW = size;
  const basinH = size * 0.4;
  const pillarW = size * 0.18;
  const pillarH = size * 0.35;

  return (
    <Group>
      {/* Basin shadow */}
      <Oval
        x={cx - basinW / 2 + 3}
        y={cy - basinH / 2 + 6}
        width={basinW}
        height={basinH}
        color="rgba(0,0,0,0.1)"
      />

      {/* Pillar */}
      <Rect
        x={cx - pillarW / 2}
        y={cy - pillarH - basinH * 0.1}
        width={pillarW}
        height={pillarH}
        color="#C8C0B4"
      />
      {/* Pillar highlight */}
      <Rect
        x={cx - pillarW / 2 + pillarW * 0.3}
        y={cy - pillarH - basinH * 0.1}
        width={pillarW * 0.2}
        height={pillarH}
        color="rgba(255,255,255,0.3)"
      />

      {/* Pillar top cap */}
      <Oval
        x={cx - pillarW * 0.7}
        y={cy - pillarH - basinH * 0.1 - 6}
        width={pillarW * 1.4}
        height={10}
        color="#B8B0A4"
      />

      {/* Basin */}
      <Oval
        x={cx - basinW / 2}
        y={cy - basinH / 2}
        width={basinW}
        height={basinH}
        color="#D0D0C8"
      />
      {/* Basin rim */}
      <Oval
        x={cx - basinW / 2}
        y={cy - basinH / 2}
        width={basinW}
        height={basinH}
        color="#8A8278"
        style="stroke"
        strokeWidth={3}
      />

      {/* Water surface */}
      <Oval
        x={cx - basinW / 2 + 8}
        y={cy - basinH / 2 + 5}
        width={basinW - 16}
        height={basinH - 10}
        color={colors.water}
        opacity={0.7}
      />

      {/* Water highlight */}
      <Oval
        x={cx - basinW * 0.15}
        y={cy - basinH * 0.15}
        width={basinW * 0.2}
        height={basinH * 0.18}
        color="rgba(255,255,255,0.4)"
      />

      {/* Water spout drops */}
      {[0, 1, 2].map(i => (
        <Circle
          key={`drop-${i}`}
          cx={cx + (i - 1) * 8}
          cy={cy - pillarH - basinH * 0.1 - 12 - i * 4}
          r={2}
          color={colors.water}
          opacity={0.6}
        />
      ))}
    </Group>
  );
}
