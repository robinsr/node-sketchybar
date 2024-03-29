import {
  ArgbHex,
  AssetPath,
  FontString,
  Position,
  PosNumber,
  PositiveIntList,
  SketchBool,
} from "./types.ts";

// type float = // A floating point number
// type integer = // An integer
// type positive_integer = // A positive integer

export interface FontProps
  extends Partial<{
    // "Hack Nerd Font", The font family to be used for the text
    family: string;
    // "Bold", The font style to be used for the text
    style: string;
    // "14.0", The font size to be used for the text
    size: number;
  }> {}

export interface ImageProps
  extends Partial<{
    // off;	If the image should draw
    drawing: SketchBool;
    // 1.0	The scale factor that should be applied to the image
    scale: number;
    // 0x00000000	Color of the image border
    border_color: ArgbHex;
    // 0;	Width of the image border
    border_width: PosNumber;
    // 0;	Corner radius of the image
    corner_radius: PosNumber;
    // 0;	Padding to the left of the image
    padding_left: number;
    // 0;	Padding to the right of the image
    padding_right: number;
    // 0;	Vertical offset applied to the image
    y_offset: number;
    // app.<bundle-id>, app.<name>, media.artwork	—	The image to display in the bar
    string: AssetPath;
    // Images support all shadow properties
    shadow: ShadowProps;
  }> {}

export interface ShadowProps
  extends Partial<{
    // off;	If the shadow should be drawn
    drawing: SketchBool;
    // 0xff000000	Color of the shadow
    color: ArgbHex;
    // 30	Angle of the shadow
    angle: PosNumber;
    // 5	Distance of the shadow
    distance: PosNumber;
  }> {}

export interface BackgroundProps
  extends Partial<{
    // "0x00000000"; Fill color of the background"
    color: ArgbHex;
    // "0x00000000"; Color of the backgrounds border"
    border_color: ArgbHex;
    // off; If the background shouldo ;endered
    drawing: SketchBool;
    // 0; Width of the background bode; // idth Sketch
    border_width: PosNumber;
    // 0; Overrides the height of the background
    height: PosNumber;
    // 0; Corner radius of the background
    corner_radius: PosNumber;
    // 0; Padding to the left of the background
    padding_left: number;
    // 0; Padding to the right of the background
    padding_right: number;
    // 0; Vertical offset applied to the background
    y_offset: number;
    // 0.0; By how much the background clips the bar (i.e. transparent holes in the bar)
    clip: number;
    // Backgrounds support all image properties
    image: AssetPath | ImageProps;
    // Backgrounds support all shadow properties
    shadow: ShadowProps;
  }> {}

export interface TextProps
  extends Partial<{
    // on; If the text is rendered
    drawing: SketchBool;
    // off; If the text uses the highlight_color or the regular color
    highlight: SketchBool;
    // "0xffffffff", Color used to render the text
    color: ArgbHex;
    // "0xff000000"; Highlight color of the text (e.g. for active space icon
    highlight_color: ArgbHex;
    // 0, Padding to the left of the text
    padding_left: number;
    // 0, Padding to the right of the text
    padding_right: number;
    // 0, Vertical offset applied to the text
    y_offset: number;
    // "Hack Nerd Font:Bold:14.0"; The font to be used for the text
    font: FontString | FontProps;
    // left, Aligns the text in its container when it has a fixed width larger than the content width
    align: Position;
    // Sets the text to the specified string
    string: string;
    // 100; Sets the scroll speed of text trucated by max_chars on items with scroll_texts enabled
    scroll_duration: PosNumber;
    // 0; Sets the maximum characters to display (can be scrolled via the items scroll_texts property)
    max_chars: PosNumber;
    // dynamic; Makes the text use a fixed width given in points
    width: PosNumber | "dynamic";
    // Texts support all background properties
    background: BackgroundProps;
    // Texts support all shadow properties
    shadow: ShadowProps;
  }> {}

export interface GeometryProps
  extends Partial<{
    // on; If the item should be drawn into the bar
    drawing: boolean;
    // Position of the item in the bar
    position: Position;
    // 0; Spaces to show this item on
    space: PositiveIntList;
    // 0;	Displays to show this item on
    display: PositiveIntList | "active";
    // off;	Ignores all space / display associations while on
    ignore_association: SketchBool;
    // 0;	Vertical offset applied to the item
    y_offset: number;
    // 0;	The padding applied left of the item
    padding_left: number;
    // 0;	The padding applied right of the item
    padding_right: number;
    // dynamico Makes the item use a fixed width given in points
    width: PosNumber | "dynamic";
    // off;	Controls the automatic scroll of all items texts, which are truncated by the max_chars property
    scroll_texts: SketchBool;
    // 0;	The blur radius applied to the background of the item
    blur_radius: PosNumber;
    // Items support all background properties
    background: BackgroundProps;
  }> {}

export interface LabelProps extends TextProps {
  // Value of the label
  text: string;
}

export interface IconProps extends TextProps {
  // Value of the icon
  text: string;
}
