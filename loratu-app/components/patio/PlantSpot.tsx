import {
  Group, Rect, RoundedRect, Circle, Oval, Line, Path,
  vec,
} from '@shopify/react-native-skia';
import { colors } from '../../constants/theme';
import { getPlantGraphics } from '../../graphics/plants';

interface Props {
  cx: number;
  cy: number;
  potSize: number;
  speciesId?: string;
  stage?: number;
  isEmpty: boolean;
}

/** Draws a clay pot (maceta) with optional plant */
export default function PlantSpot({ cx, cy, potSize, speciesId, stage = 0, isEmpty }: Props) {
  const potW = potSize;
  const potH = potSize * 0.65;
  const rimH = potSize * 0.14;
  const rimExtra = potSize * 0.12;

  const potLeft = cx - potW / 2;
  const potTop = cy - potH / 2;
  const rimTop = potTop - rimH;

  return (
    <Group>
      {/* Pot shadow */}
      <Oval
        x={cx - potW * 0.55}
        y={cy + potH / 2 - 4}
        width={potW * 1.1}
        height={potSize * 0.2}
        color="rgba(0,0,0,0.12)"
      />

      {/* Plant (drawn before pot so stems appear to come from inside) */}
      {!isEmpty && speciesId && (
        <PlantDrawing
          cx={cx}
          bottom={potTop + 4}
          speciesId={speciesId}
          stage={stage}
          potSize={potSize}
        />
      )}

      {/* Pot body — trapezoid approximation via Skia path */}
      <Path
        path={`M ${potLeft + 4} ${potTop} L ${potLeft - 2} ${potTop + potH} Q ${cx} ${potTop + potH + 8} ${potLeft + potW + 2} ${potTop + potH} L ${potLeft + potW - 4} ${potTop} Z`}
        color={isEmpty ? '#A08060' : colors.clay}
        opacity={isEmpty ? 0.4 : 1}
      />
      {/* Pot body shading */}
      {!isEmpty && (
        <Path
          path={`M ${potLeft + potW * 0.6} ${potTop} L ${potLeft + potW * 0.55 + 2} ${potTop + potH} L ${potLeft + potW - 2} ${potTop + potH} L ${potLeft + potW - 4} ${potTop} Z`}
          color="rgba(0,0,0,0.08)"
        />
      )}

      {/* Azulejo decoration band on pot */}
      {!isEmpty && (
        <Group>
          {[0, 1, 2, 3, 4].map(i => (
            <Rect
              key={`az-${i}`}
              x={potLeft + 8 + i * (potW - 16) / 5}
              y={potTop + potH * 0.3}
              width={(potW - 16) / 5 - 2}
              height={potH * 0.25}
              color={i % 2 === 0 ? colors.tileBlue : colors.tileWhite}
              opacity={0.3}
            />
          ))}
        </Group>
      )}

      {/* Rim */}
      <RoundedRect
        x={potLeft - rimExtra / 2}
        y={rimTop}
        width={potW + rimExtra}
        height={rimH}
        r={4}
        color={isEmpty ? '#8D7B6B' : colors.clayRim}
        opacity={isEmpty ? 0.4 : 1}
      />

      {/* Rim highlight */}
      {!isEmpty && (
        <Rect
          x={potLeft - rimExtra / 2 + 3}
          y={rimTop + 2}
          width={potW * 0.3}
          height={rimH - 4}
          color="rgba(255,255,255,0.15)"
        />
      )}

      {/* Soil visible in empty pot */}
      {isEmpty && (
        <Oval
          x={potLeft + 2}
          y={potTop - 2}
          width={potW - 4}
          height={10}
          color="#6B4226"
          opacity={0.3}
        />
      )}

      {/* Plus sign for empty */}
      {isEmpty && (
        <Group opacity={0.3}>
          <Line
            p1={vec(cx - 8, rimTop - 16)}
            p2={vec(cx + 8, rimTop - 16)}
            color={colors.clayDark}
            strokeWidth={3}
            strokeCap="round"
          />
          <Line
            p1={vec(cx, rimTop - 24)}
            p2={vec(cx, rimTop - 8)}
            color={colors.clayDark}
            strokeWidth={3}
            strokeCap="round"
          />
        </Group>
      )}
    </Group>
  );
}

/** Draws the actual plant above the pot */
function PlantDrawing({
  cx, bottom, speciesId, stage, potSize,
}: {
  cx: number; bottom: number; speciesId: string; stage: number; potSize: number;
}) {
  const graphics = getPlantGraphics(speciesId);
  if (!graphics) return null;

  const stageData = graphics.stages[Math.min(stage, 3)];
  const { scale: s, colors: c } = stageData;

  const stemH = potSize * 0.8 * s;
  const stemTop = bottom - stemH;
  const stemW = 3 + s * 2;

  return (
    <Group>
      {/* Main stem */}
      <Line
        p1={vec(cx, bottom)}
        p2={vec(cx, stemTop)}
        color={c.stem}
        strokeWidth={stemW}
        strokeCap="round"
      />

      {/* Leaves — scale with stage */}
      {stage >= 0 && (
        <>
          {/* Small leaf pair */}
          <Path
            path={`M ${cx} ${bottom - stemH * 0.4} Q ${cx + 12 * s} ${bottom - stemH * 0.5 - 6 * s} ${cx + 8 * s} ${bottom - stemH * 0.4 - 12 * s}`}
            color={c.leaf}
            strokeWidth={2.5}
            style="stroke"
            strokeCap="round"
          />
          <Path
            path={`M ${cx} ${bottom - stemH * 0.4} Q ${cx - 12 * s} ${bottom - stemH * 0.5 - 6 * s} ${cx - 8 * s} ${bottom - stemH * 0.4 - 12 * s}`}
            color={c.leaf}
            strokeWidth={2.5}
            style="stroke"
            strokeCap="round"
          />
        </>
      )}

      {stage >= 1 && (
        <>
          {/* Bigger leaves */}
          <Oval
            x={cx - 14 * s}
            y={bottom - stemH * 0.6 - 8 * s}
            width={14 * s}
            height={8 * s}
            color={c.leaf}
          />
          <Oval
            x={cx + 2}
            y={bottom - stemH * 0.65 - 8 * s}
            width={14 * s}
            height={8 * s}
            color={c.leaf}
          />
        </>
      )}

      {stage >= 2 && c.accent && (
        <>
          {/* More foliage */}
          <Oval
            x={cx - 10 * s}
            y={bottom - stemH * 0.75 - 6 * s}
            width={10 * s}
            height={6 * s}
            color={c.accent}
            opacity={0.7}
          />
          <Oval
            x={cx + 2}
            y={bottom - stemH * 0.8 - 6 * s}
            width={10 * s}
            height={6 * s}
            color={c.accent}
            opacity={0.7}
          />
        </>
      )}

      {/* Flowers at stage 3 */}
      {stage >= 3 && c.flower && (
        <>
          <Circle cx={cx} cy={stemTop - 2} r={7 * s} color={c.flower} />
          <Circle cx={cx - 8 * s} cy={stemTop + 4} r={5.5 * s} color={c.flower} opacity={0.85} />
          <Circle cx={cx + 8 * s} cy={stemTop + 4} r={5.5 * s} color={c.flower} opacity={0.85} />
          {/* Flower center */}
          <Circle cx={cx} cy={stemTop - 2} r={3 * s} color={c.accent ?? '#FFF9C4'} />
        </>
      )}
    </Group>
  );
}
