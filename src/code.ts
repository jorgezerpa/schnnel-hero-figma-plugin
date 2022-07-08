import headers from './layouts/headers/index';

figma.showUI(__html__);

figma.ui.postMessage( JSON.stringify({ name: headers.name, quantity: headers.layouts.length }));

figma.ui.onmessage = msg => {
  if (msg.type === 'create'+headers.name+'1') {
    const frame = headers.layouts[1]();
    figma.currentPage.appendChild(frame);
  }
  else {
    const frame = headers.layouts[0]();
    figma.currentPage.appendChild(frame);
  }


  figma.closePlugin();
};

