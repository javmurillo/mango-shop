export interface BulletStyles {
  handle: Object;
  focusedHandle: Object;
  hoveredHandle: Object;
  activeHandle: Object;
}

export const bulletStyles: BulletStyles = {
  handle: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    height: 30,
    width: 30,
    backgroundColor: 'black',
    border: '1px solid #052350',
    borderRadius: '50%',
  },
  focusedHandle: {
    border: '2px solid 052350',
  },
  hoveredHandle: {
    backgroundColor: 'white',
    border: '2px solid #052350',
    boxShadow: '0px 0px 5px 0px gray',
    height: '38px',
    width: '38px',
  },
  activeHandle: {
    backgroundColor: 'white',
    border: '2px solid #052350',
    cursor: 'grab',
    boxShadow: 'inset 0px 0px 5px 0px gray',
    height: '35px',
    width: '35px',
  },
};
