type ThemeFunction = (path: string) => any;

type AddBaseFunction = (baseStyles: Record<string, any>) => void;

interface PluginContext {
  addBase: AddBaseFunction;
  theme: ThemeFunction;
}

type ColorValue = string | ColorMap;
interface ColorMap {
  [color: string]: ColorValue;
}

function extractColorVars(colorObj: ColorMap, colorGroup: string = ''): Record<string, string> {
  return Object.keys(colorObj).reduce((vars, colorKey) => {
    const value = colorObj[colorKey];

    const newVars =
      typeof value === 'string'
        ? { [`--color${colorGroup}-${colorKey}`]: value }
        : extractColorVars(value, `-${colorKey}`);

    return { ...vars, ...newVars };
  }, {});
}

const extractColorsPlugin = ({ addBase, theme }: PluginContext) => {
  addBase({
    ':root': extractColorVars(theme('colors') as ColorMap),
  });
};

export default extractColorsPlugin;
