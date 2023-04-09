export const customIcons = {
  // Borrowed from MAKE.md.
  makeMdCalloutIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="6.5" width="9" height="3" stroke="currentColor"/>
    <line x1="4.5" y1="3.5" x2="11.5" y2="3.5" stroke="#B2B2B2" stroke-linecap="round"/>
    <line x1="4.5" y1="12.5" x2="11.5" y2="12.5" stroke="#B2B2B2" stroke-linecap="round"/>
    </svg>`,

  // Borrowed from cMenu.
  cMenuToolBarAdd: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="white"/>
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z" fill="white"/>
    </svg>`,

  // Borrowed from Obsidian Excalidraw.
  excalidrawIcon: `<svg viewBox="0 0 100 100" class="svg-icon excalidraw-icon"><g transform="translate(30,0)"><path fill="currentColor" stroke="currentColor" d="M14.45 1.715c-2.723 2.148-6.915 5.797-10.223 8.93l-2.61 2.445.477 3.207c.258 1.75.738 5.176 1.031 7.582.332 2.406.66 4.668.773 4.996.145.438 0 .656-.406.656-.699 0-.734-.183 1.176 5.832.7 2.297 1.363 4.414 1.434 4.633.074.254.367.363.699.254.332-.145.515-.438.406-.691-.113-.293.074-.586.367-.696.403-.144.367-.437-.258-1.492-.992-1.64-3.53-15.64-3.675-20.164-.11-3.207-.11-3.242 1.25-5.066 1.324-1.786 4.375-4.485 9.078-7.91 1.324-.985 2.648-2.079 3.015-2.446.551-.656.809-.472 5.442 4.414 2.683 2.805 5.664 5.688 6.617 6.414l1.766 1.313-1.36 2.844c-.734 1.53-3.715 7.437-6.656 13.054-6.137 11.813-4.887 10.68-12.02 10.79l-4.632.038-1.547 1.75c-1.617 1.86-1.836 2.551-1.063 3.72.293.398.512 1.054.512 1.456 0 .656.258.766 1.73.84.918.035 1.762.145 1.875.254.11.11.258 2.371.368 5.031l.144 4.813-2.46 5.25C1.616 72.516 0 76.527 0 77.84c0 .691.148 1.273.293 1.273.367 0 .367-.035 15.332-30.988 6.95-14.363 13.531-27.89 14.633-30.113 1.101-2.227 2.094-4.266 2.168-4.559.074-.328-2.461-2.844-6.508-6.379C22.281 3.864 19.082.95 18.785.621c-.844-1.023-2.094-.695-4.336 1.094zM15.7 43.64c-1.692 3.246-1.766 3.28-6.4 3.5-4.081.218-4.152.183-4.152-.582 0-.438-.148-1.024-.332-1.313-.222-.328-.074-.914.442-1.715l.808-1.238h3.676c2.024-.04 4.34-.184 5.149-.328.808-.149 1.507-.219 1.578-.184.074.035-.293.875-.77 1.86zm-3.09 5.832c-.294.765-1.067 2.37-1.692 3.574-1.027 2.043-1.137 2.113-1.395 1.277-.148-.511-.257-2.008-.296-3.355-.036-2.66-.11-2.625 2.98-2.809l.992-.035zm0 0"></path><path fill="currentColor" stroke="currentColor" d="M15.55 10.39c-.66.473-.843.95-.843 2.153 0 1.422.11 1.64 1.102 2.039.992.402 1.25.367 2.39-.398 1.508-1.024 1.543-1.278.442-2.918-.957-1.422-1.914-1.676-3.09-.875zm2.098 1.313c.586 1.02.22 1.785-.882 1.785-.993 0-1.434-.984-.883-1.968.441-.801 1.285-.727 1.765.183zm0 0M38.602 18.594c0 .183-.22.363-.477.363-.219 0-.844 1.023-1.324 2.262-1.469 3.793-16.176 32.629-16.211 31.718 0-.472-.223-.8-.59-.8-.516 0-.59.289-.367 1.71.219 1.641.074 2.008-5.149 12.071-2.941 5.723-6.101 11.703-7.02 13.305-.956 1.68-1.69 3.5-1.765 4.265-.11 1.313.035 1.496 3.235 4.23 1.84 1.606 4.191 3.61 5.222 4.52 4.63 4.196 6.801 5.871 7.387 5.762.883-.145 14.523-14.328 14.559-15.129 0-.367-.66-5.906-1.47-12.324-1.398-10.938-2.722-23.734-2.573-24.973.109-.765-.442-4.633-.844-6.308-.332-1.313-.184-1.86 2.46-7.84 1.544-3.535 3.567-7.875 4.45-9.625.844-1.75 1.582-3.281 1.582-3.39 0-.11-.258-.18-.55-.18-.298 0-.555.144-.555.363zm-8.454 27.234c.403 2.55 1.211 8.676 1.801 13.598 1.14 9.043 2.461 19.07 2.832 21.62.219 1.278.07 1.532-2.316 4.157-4.156 4.629-8.567 9.188-10.074 10.356l-1.399 1.093-7.168-6.636c-6.617-6.051-7.168-6.672-6.765-7.403.222-.398 2.097-3.789 4.156-7.508 2.058-3.718 4.777-8.68 6.027-11.011 1.29-2.371 2.465-4.41 2.684-4.52.258-.148.332 3.535.258 11.375-.149 11.703-.11 11.739 1.066 11.485.148 0 .258-5.907.258-13.09V56.293l3.86-7.656c2.132-4.23 3.898-7.621 3.972-7.586.07.039.441 2.187.808 4.777zm0 0"></path></g></svg>`,

  // Borrowed from core plug-in Canvas.
  canvasIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-layout-dashboard">
    <rect x="3" y="3" width="7" height="9"></rect>
    <rect x="14" y="3" width="7" height="5"></rect>
    <rect x="14" y="12" width="7" height="9"></rect>
    <rect x="3" y="16" width="7" height="5"></rect>
    </svg>`,

  // Borrowed from Lark doc.
  larkTableIcon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="DataSheetOutlined">
    <path d="M19.5 4.25v15.5H4V4.25h15.5ZM4 2.25a2 2 0 0 0-2 2v15.5a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2V4.25a2 2 0 0 0-2-2H4Z" fill="currentColor"></path>
    <path d="M9.997 4.25v3.835H19.5v2H9.997v3.83H19.5v2H9.997v3.835h-2v-3.835H4v-2h3.997v-3.83H4v-2h3.997V4.25h2Z" fill="currentColor"></path>
    </svg>`,

  larkCalloutIcon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="CalloutOutlined">
    <path d="M4 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm16 2v6H4V4h16ZM3 16a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H4Z" fill="currentColor">
    </path>
    </svg>`,

  larkFlowchartIcon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon="DrawioOutlined">
    <path d="M15.722 1.55a2 2 0 0 1 2.828 0l3.536 3.536a2 2 0 0 1 0 2.828L18.55 11.45a2 2 0 0 1-2.828 0l-3.536-3.536a2.003 2.003 0 0 1-.318-.414H7.5a1 1 0 0 0-1 1V16a1 1 0 0 0 1 1H11v-1a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-1H7.5a3 3 0 0 1-3-3v-3.181H1.91a.91.91 0 1 1 0-1.819H4.5V8.5a3 3 0 0 1 3-3h4.368c.085-.148.192-.288.318-.414l3.536-3.536Zm1.414 1.414L13.601 6.5l3.535 3.536L20.672 6.5l-3.536-3.536ZM20 16h-7v4h7v-4Z" fill="currentColor">
    </path>
    </svg>`,

  larkSymbolicon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76">
    </path>
    </svg>`,

  // Others
  unicodeIcon: `<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Unicode icon</title><path d="M.2 0a.2.2 0 00-.2.2v23.6c0 .11.09.2.2.2h23.6a.2.2 0 00.2-.2V.2a.2.2 0 00-.2-.2H.2zm19.488 5.27A1.312 1.312 0 0121 6.582a1.312 1.312 0 01-1.313 1.313 1.312 1.312 0 01-1.31-1.313 1.312 1.312 0 011.31-1.312zM3.15 6.05h1.996c.102 0 .153.05.153.151v7.49c0 .912.222 1.644.666 2.188.444.546 1.121.816 2.033.816.38 0 .729-.048 1.047-.15.316-.102.59-.272.824-.506.234-.236.419-.546.553-.932.134-.386.2-.869.2-1.453V6.223c0-.014.003-.024.005-.035l-.006-.004c0-.09.045-.133.133-.133h2.682c.076 0 .126.01.152.027.026.018.05.054.076.104.228.418.499.906.809 1.464.31.558.629 1.14.959 1.749l.998 1.843c.334.62.647 1.206.94 1.758.291.552.549 1.045.77 1.475.223.432.39.768.505 1.008h.02c0-.126-.005-.27-.01-.428a25.728 25.728 0 01-.02-.57c-.006-.223-.014-.493-.02-.81-.008-.315-.01-.696-.01-1.14v-3.21c0-.103.056-.153.17-.153H20.6c.114 0 .171.058.171.172v9.03c0 .113-.063.17-.189.17h-2.414c-.114 0-.198-.046-.248-.134a173.907 173.907 0 00-1.623-3.021 232.322 232.322 0 01-2.121-3.946 96.063 96.063 0 01-.883-1.718 37.59 37.59 0 01-.371-.768v4.815c0 .888-.13 1.643-.39 2.271-.26.628-.611 1.141-1.055 1.541a4.112 4.112 0 01-1.588.873 6.848 6.848 0 01-1.97.277 6.42 6.42 0 01-2.032-.304 4.196 4.196 0 01-1.559-.903c-.43-.4-.76-.903-.988-1.511-.228-.608-.342-1.325-.342-2.149v-7.64c0-.114.05-.172.152-.172Z"></path></g></svg>`,
};
