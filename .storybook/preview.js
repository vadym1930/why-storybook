import crfTheme from './crfTheme';
import '../bootstrap-reboot.min.css';
import '../bootstrap.css';
import '../bootstrap-grid.css';
import '../main.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    theme: crfTheme
  },
}
