export const headerSeven = async() => {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    const vector = figma.createVector();
    vector.x = 0;
    vector.y = 0;
    vector.vectorPaths = [
      {
        windingRule: "EVENODD",
        data: "M 0 0 L 0 1024 L 1440 1024 L 0 0 L 0 0 Z",
      }
    ]
    vector.fills = [{ type: "SOLID", color:{r:.8, g: .8, b:.8} }]


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
      frame.appendChild(title);
      frame.appendChild(subTitle);
      frame.appendChild(vector);
    
    return frame;
}