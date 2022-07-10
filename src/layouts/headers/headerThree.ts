export const headerThree = async() => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    const rect = figma.createRectangle();
      rect.fills = [{type: 'SOLID', color: {r: .8, g: .8, b: .8}}]
      rect.resize(720, 1024);
      rect.x= 0; 

    const title = figma.createText();
      title.characters = 'Title';
      title.x = 1163;
      title.y = 450;
      title.fontSize = 70;

    const subTitle = figma.createText();
      subTitle.characters = 'lorem inpsum dolor sin ammet';
      subTitle.x = 882;
      subTitle.y = 535;
      subTitle.fontSize = 30;
    
    const frame = figma.createFrame();
      frame.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
      frame.x = 0;
      frame.resize(1440, 1024);
      frame.appendChild(rect);
      frame.appendChild(title);
      frame.appendChild(subTitle);
    
    return frame;
}