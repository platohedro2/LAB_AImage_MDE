export interface Template {
  url: string;
  description: string;
  title: string;
};
const svgdoodles: Template = {
  url: "https://www.svgdoodles.com/",
  description: "Lenguaje de programación muy utilizado para AI",
  title: "PYTHON"
};
const svggradients: Template = {
  url: "https://www.svggradients.com/",
  description: "Libreria de python para AI ",
  title: "X TRANSFORMRES"
};
const quicksetup: Template = {
  url: "https://www.figma.com/community/plugin/1074647052897925336",
  description: " Libreria de python para AI",
  title: "PYTHORCH"
};
const vscodethemes: Template = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: "Model opensource para hacer imagenes con AI ",
  title: "STABLEDIFFUSION"
};
const flabbergasted: Template = {
  url: "https://marketplace.visualstudio.com/publishers/wicked-labs",
  description: "Entorno de ejecuón de codigo  de python",
  title: "G-COLAB"
};
export const byName = {
  svgdoodles,
  svggradients,
    quicksetup,
    vscodethemes,
  flabbergasted

};
export const otherprojects = Object.values(byName);
