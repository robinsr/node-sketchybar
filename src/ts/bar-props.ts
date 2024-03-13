

interface BarProps {
  color: string;
  border_color: string;
  position: 'Top' | 'Bottom';
  height: number;
  margin: number;
  y_offset: number;
  corner_radius: number;
  border_width: number;
  blur_radius: number;
  padding_left: number;
  padding_right: number;
  notch_width: number;
  notch_offset: number;
  display: 'all' | 'main' | number;
  hidden: boolean;
  topmost: boolean;
  sticky: boolean;
  font_smoothing: boolean;
  shadow: boolean;
}