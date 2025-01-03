type TemplateName =
  | "all-over_print_hoodie/hoodie_back_template"
  | "all-over_print_hoodie/hoodie_front_pocket_template"
  | "all-over_print_hoodie/hoodie_front_template"
  | "all-over_print_hoodie/hoodie_hood_template"
  | "all-over_print_hoodie/hoodie_label_panel_template"
  | "all-over_print_hoodie/hoodie_left_sleeve_template"
  | "all-over_print_hoodie/hoodie_right_sleeve_template"
  | "hockey_fan_jersey/Hockey_jersey_customer_template_back"
  | "hockey_fan_jersey/Hockey_jersey_customer_template_front"
  | "hockey_fan_jersey/Hockey_jersey_customer_template_left_sleeve"
  | "hockey_fan_jersey/Hockey_jersey_customer_template_right_sleeve"
  | "hockey_fan_jersey/Hockey_jersey_customer_template_yoke"
  | "hockey_fan_jersey/logo_template"
  | "hockey_fan_jersey/Outside_label_customer_template";

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
        href={`file://${process.cwd()}/images/svg/printful.com.templates/${image}.png`}
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
