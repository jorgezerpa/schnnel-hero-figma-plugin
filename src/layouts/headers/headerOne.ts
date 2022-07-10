export const headerOne = async() => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const title = figma.createText();
    title.characters = 'Title';
    title.resize(1440, 76);
    title.textAlignHorizontal = 'CENTER'; 
    title.x = 0;
    title.y = 374;
    title.fontSize = 70;
    
    const subTitle = figma.createText();
    subTitle.characters = 'lorem inpsum dolor sin ammet';
    subTitle.resize(1440, 36);
    subTitle.textAlignHorizontal = 'CENTER'; 
    subTitle.x = 0;
    subTitle.y = 476;
    subTitle.fontSize = 30;
  
  const frame = figma.createFrame();
    frame.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
    frame.x = 0;
    frame.resize(1440, 1024);
    frame.appendChild(title);
    frame.appendChild(subTitle);
  
  return frame;
}