type TemplateName =
  | "hoodie_back_template"
  | "hoodie_front_pocket_template"
  | "hoodie_front_template"
  | "hoodie_hood_template"
  | "hoodie_label_panel_template"
  | "hoodie_left_sleeve_template"
  | "hoodie_right_sleeve_template";

type Props = {
  image: TemplateName;
  opacity?: number;
  width?: number;
  height?: number;
  viewBoxOffset?: { x: number; y: number };
};
export default ({
  image,
  opacity = 0.5,
  width = 6000,
  height = 6000,
  viewBoxOffset = { x: 0, y: 0 },
}: Props) => (
  <>
    <pattern
      id='template'
      patternUnits='userSpaceOnUse'
      x={-width / 2 + viewBoxOffset.x}
      y={-width / 2 + viewBoxOffset.y}
      {...{ width, height }}
    >
      <image
        href={`file://${process.cwd()}/images/printful.com.templates/${image}.png`}
        {...{ width, height }}
      />
    </pattern>
    <path
      d={`M${-width / 2 + viewBoxOffset.x} ${
        -height / 2 + viewBoxOffset.y
      }h${width}v${height}h${-width}Z`}
      fill='url(#template)'
      fillOpacity={opacity}
    />
  </>
);
