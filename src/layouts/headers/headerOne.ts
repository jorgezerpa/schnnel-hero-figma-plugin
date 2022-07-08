export const headerOne = () => {
    const rect = figma.createRectangle();
    rect.fills = [{type: 'SOLID', color: {r: .8, g: .8, b: .8}}]
    rect.resize(720, 1024);  
    
    const frame = figma.createFrame();
      frame.x = 150;
      frame.resize(1440, 1024);
      frame.appendChild(rect);
      frame.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
    
    return frame;
}