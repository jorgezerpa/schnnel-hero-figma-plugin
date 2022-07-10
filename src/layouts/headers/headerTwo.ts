export const headerTwo = async() => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const rect = figma.createRectangle();
    rect.fills = [{type: 'SOLID', color: {r: .8, g: .8, b: .8}}]
    rect.resize(1440, 512);
    rect.y= 512; 

  const title = figma.createText();
    title.characters = 'Title';
    title.resize(1440,70);
    title.textAlignHorizontal = 'CENTER';
    title.x = 0;
    title.y = 200;
    title.fontSize = 70;
    
    const subTitle = figma.createText();
    subTitle.resize(1440, 30);
    subTitle.textAlignHorizontal = 'CENTER';
    subTitle.characters = 'lorem inpsum dolor sin ammet';
    subTitle.x = 0;
    subTitle.y = 302;
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