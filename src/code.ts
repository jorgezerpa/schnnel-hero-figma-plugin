import headers from './layouts/headers/index';

const thumbs = headers.layouts.map((thumb)=>thumb.thumb);

figma.showUI(__html__, {themeColors: true });
figma.ui.resize(600, 400);

figma.ui.postMessage( JSON.stringify({ name: headers.name, quantity: headers.layouts.length, thumbs: thumbs }));

figma.ui.onmessage = async(msg) => {
  for(let i = 0; i<headers.layouts.length; i++){
    if (msg.type === 'create'+headers.name+i) {
      const frame = await headers.layouts[i].element();
      figma.currentPage.appendChild(frame);
    }
  }


  figma.closePlugin();
};

