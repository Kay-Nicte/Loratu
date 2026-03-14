import { useMemo } from 'react';
import { View, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import {
  Canvas, Group, Rect, RoundedRect, Path, Line, Circle, Oval,
  vec,
} from '@shopify/react-native-skia';
import { colors } from '../../constants/theme';
import { SPOT_POSITIONS } from '../../constants/layout';
import { useGameStore } from '../../stores/gameStore';
import TileFloor from './TileFloor';
import Fountain from './Fountain';
import PlantSpot from './PlantSpot';

interface Props {
  onSpotPress: (spotIndex: number) => void;
}

export default function PatioCanvas({ onSpotPress }: Props) {
  const { width: screenW } = useWindowDimensions();
  const plants = useGameStore(s => s.plants);
  const spots = useGameStore(s => s.spots);

  const padding = 16;
  const patioSize = Math.min(screenW - padding * 2, 500);

  const wallThick = patioSize * 0.07;
  const wallTop = wallThick * 1.2;
  const floorX = wallThick;
  const floorY = wallTop;
  const floorW = patioSize - wallThick * 2;
  const floorH = patioSize - wallTop - wallThick;

  const fountainCx = patioSize / 2;
  const fountainCy = patioSize * 0.48;
  const fountainSize = patioSize * 0.18;
  const potSize = patioSize * 0.085;

  const spotPositions = useMemo(() =>
    SPOT_POSITIONS.map(sp => ({
      x: floorX + (floorW * sp.xPercent) / 100,
      y: floorY + (floorH * sp.yPercent) / 100,
    })),
    [floorX, floorY, floorW, floorH]
  );

  const archCount = 5;
  const archSpacing = (patioSize - wallThick * 2) / (archCount + 1);

  return (
    <View style={{ width: patioSize, height: patioSize, position: 'relative' }}>
      <Canvas style={{ width: patioSize, height: patioSize }}>
        {/* Shadow */}
        <RoundedRect x={4} y={6} width={patioSize - 8} height={patioSize - 8} r={14} color="rgba(0,0,0,0.12)" />

        {/* Patio base */}
        <RoundedRect x={0} y={0} width={patioSize} height={patioSize} r={12} color={colors.wall} />

        {/* Floor */}
        <TileFloor x={floorX} y={floorY} width={floorW} height={floorH} />

        {/* Top wall */}
        <Rect x={0} y={0} width={patioSize} height={wallTop} color={colors.wall} />
        <Line p1={vec(0, wallTop)} p2={vec(patioSize, wallTop)} color={colors.wallShadow} strokeWidth={2.5} />

        {/* Arches */}
        {Array.from({ length: archCount }).map((_, i) => {
          const archCx = wallThick + archSpacing * (i + 1);
          const archW = archSpacing * 0.55;
          const archH = wallTop * 0.7;
          const archTop = wallTop * 0.12;
          return (
            <Group key={`arch-${i}`}>
              <Path
                path={`M ${archCx - archW / 2} ${archTop + archH} L ${archCx - archW / 2} ${archTop + archH / 2} Q ${archCx - archW / 2} ${archTop} ${archCx} ${archTop} Q ${archCx + archW / 2} ${archTop} ${archCx + archW / 2} ${archTop + archH / 2} L ${archCx + archW / 2} ${archTop + archH} Z`}
                color="rgba(135,206,235,0.35)"
              />
              <Path
                path={`M ${archCx - archW / 2} ${archTop + archH} L ${archCx - archW / 2} ${archTop + archH / 2} Q ${archCx - archW / 2} ${archTop} ${archCx} ${archTop} Q ${archCx + archW / 2} ${archTop} ${archCx + archW / 2} ${archTop + archH / 2} L ${archCx + archW / 2} ${archTop + archH}`}
                color={colors.terra}
                strokeWidth={2.5}
                style="stroke"
              />
            </Group>
          );
        })}

        {/* Left wall */}
        <Rect x={0} y={wallTop} width={wallThick} height={floorH} color={colors.wall} />
        <Line p1={vec(wallThick, wallTop)} p2={vec(wallThick, patioSize - wallThick)} color={colors.wallShadow} strokeWidth={2} />

        {/* Right wall */}
        <Rect x={patioSize - wallThick} y={wallTop} width={wallThick} height={floorH} color={colors.wall} />
        <Line p1={vec(patioSize - wallThick, wallTop)} p2={vec(patioSize - wallThick, patioSize - wallThick)} color={colors.wallShadow} strokeWidth={2} />

        {/* Bottom wall */}
        <Rect x={0} y={patioSize - wallThick} width={patioSize} height={wallThick} color={colors.wall} />
        <Line p1={vec(0, patioSize - wallThick)} p2={vec(patioSize, patioSize - wallThick)} color={colors.wallShadow} strokeWidth={2} />

        {/* Buganvilla accents */}
        {[
          { x: wallThick + 8, y: wallTop + 8 },
          { x: wallThick + 22, y: wallTop + 4 },
          { x: patioSize - wallThick - 12, y: wallTop + 6 },
          { x: patioSize - wallThick - 26, y: wallTop + 10 },
        ].map((d, i) => (
          <Group key={`buga-${i}`}>
            <Circle cx={d.x} cy={d.y} r={4} color="#E91E63" opacity={0.6} />
            <Circle cx={d.x + 5} cy={d.y + 3} r={3} color="#F06292" opacity={0.5} />
            <Circle cx={d.x - 3} cy={d.y + 5} r={3.5} color="#EC407A" opacity={0.55} />
          </Group>
        ))}

        {/* Fountain */}
        <Fountain cx={fountainCx} cy={fountainCy} size={fountainSize} />

        {/* Plant spots */}
        {spotPositions.map((pos, idx) => {
          const spot = spots[idx];
          const plant = spot?.plantId ? plants.find(p => p.id === spot.plantId) : null;
          return (
            <PlantSpot
              key={`spot-${idx}`}
              cx={pos.x}
              cy={pos.y}
              potSize={potSize}
              isEmpty={!plant}
              speciesId={plant?.speciesId}
              stage={plant?.stage}
            />
          );
        })}
      </Canvas>

      {/* Invisible touch targets over each pot */}
      {spotPositions.map((pos, idx) => (
        <Pressable
          key={`touch-${idx}`}
          style={[
            styles.touchTarget,
            {
              left: pos.x - potSize * 1.1,
              top: pos.y - potSize * 1.3,
              width: potSize * 2.2,
              height: potSize * 2.2,
            },
          ]}
          onPress={() => onSpotPress(idx)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  touchTarget: {
    position: 'absolute',
    // backgroundColor: 'rgba(255,0,0,0.1)', // uncomment to debug hit areas
  },
});
