import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router";
import App from "./App";

export function render(pathname) {
  return renderToString(<MemoryRouter initialEntries={[pathname]}><App /></MemoryRouter>);
}
