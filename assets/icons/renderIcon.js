function renderCustomIcon(svg) {
    let customSVG = "";
    switch (svg) {
        // Flex Row
        case "flex-column-start":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-start</title>
                    <path d="M8 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM15.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888zM23.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888z"></path>
                </svg>
            );
            break;
        case "flex-column-end":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-end</title>
                    <path d="M24 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM18.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856zM10.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856z"></path>
                </svg>
            );
            break;
        case "flex-column-center":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-center</title>
                    <path d="M16 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM23.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888zM10.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856z"></path>
                </svg>
            );
            break;
        case "flex-column-strech":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>shrink</title>
                    <path d="M16 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.736-0.608 1.344-1.344 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM26.368 8.672c0.256 0.032 0.48 0.16 0.704 0.384 0.16 0.224 0.256 0.48 0.256 0.8v3.488h2.816c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-2.816v3.616c-0.032 0.32-0.16 0.608-0.384 0.8-0.224 0.16-0.448 0.256-0.704 0.256-0.256-0.032-0.48-0.16-0.704-0.384l-5.216-6.080-0.128-0.16c-0.16-0.224-0.224-0.48-0.192-0.8s0.128-0.576 0.32-0.768l5.344-6.208c0.192-0.192 0.416-0.288 0.704-0.256zM5.632 8.672c0.224-0.032 0.448 0.032 0.608 0.16l0.128 0.096 5.344 6.176c0.16 0.224 0.288 0.48 0.288 0.8 0.032 0.256 0 0.448-0.096 0.64l-0.064 0.16-0.128 0.16-5.248 6.080c-0.192 0.224-0.416 0.352-0.704 0.384-0.224 0-0.48-0.096-0.704-0.256-0.16-0.16-0.288-0.352-0.352-0.608l-0.032-0.192v-3.616h-2.816c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h2.816v-3.488c0-0.256 0.064-0.48 0.16-0.672l0.096-0.128c0.192-0.224 0.448-0.352 0.704-0.384z"></path>
                </svg>
            );
            break;
        case "flex-column-space-between":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-between</title>
                    <path d="M1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM8.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-3.456v-21.312h3.456zM26.656 5.344v21.312h-3.456c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h3.456z"></path>
                </svg>
            );
            break;
        case "flex-column-space-around":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-around</title>
                    <path d="M30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM20.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6zM12.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6z"></path>
                </svg>
            );
            break;
        case "flex-column-space-evenly":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-evenly</title>
                    <path d="M30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM22.144 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.888-0.832-1.888-1.856v-17.6c0-1.024 0.864-1.856 1.888-1.856h1.6zM11.456 5.344c1.024 0 1.888 0.832 1.888 1.856v17.6c0 1.024-0.864 1.856-1.888 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6z"></path>
                </svg>
            );
            break;
        // Flex Column
        case "flex-row-start":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-start</title>
                    <path d="M24.928 20c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM24.928 12c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM30.656 6.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312z"></path>
                </svg>
            );
            break;
        case "flex-row-end":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-end</title>
                    <path d="M30.656 22.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312zM24.928 14.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856zM24.928 6.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856z"></path>
                </svg>
            );
            break;
        case "flex-row-center":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-center</title>
                    <path d="M24.928 20c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM30.656 14.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312zM24.928 6.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856z"></path>
                </svg>
            );
            break;
        case "flex-row-strech":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>grow</title>
                    <path d="M1.344 0c0.736 0 1.312 0.608 1.312 1.344v29.312c0 0.736-0.576 1.344-1.312 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM30.656 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.736-0.608 1.344-1.344 1.344s-1.312-0.608-1.312-1.344v-29.312c0-0.736 0.576-1.344 1.312-1.344zM20.96 8.672c0.224-0.032 0.448 0.032 0.64 0.16l0.096 0.096 5.344 6.176c0.16 0.224 0.288 0.48 0.32 0.8 0 0.256-0.032 0.448-0.128 0.64l-0.064 0.16-0.128 0.16-5.248 6.080c-0.192 0.224-0.416 0.352-0.672 0.384-0.256 0-0.512-0.096-0.736-0.256-0.16-0.16-0.288-0.352-0.352-0.608l-0.032-0.192v-3.616h-8v3.616c-0.064 0.32-0.16 0.608-0.384 0.8-0.224 0.16-0.48 0.256-0.736 0.256-0.224-0.032-0.48-0.16-0.672-0.384l-5.248-6.080-0.096-0.16c-0.16-0.224-0.224-0.48-0.192-0.8s0.128-0.576 0.288-0.768l5.376-6.208c0.192-0.192 0.416-0.288 0.704-0.256 0.256 0.032 0.48 0.16 0.704 0.384 0.16 0.224 0.256 0.48 0.256 0.8v3.488h8v-3.488c0-0.256 0.064-0.48 0.16-0.672l0.096-0.128c0.224-0.224 0.448-0.352 0.704-0.384z"></path>
                </svg>
            );
            break;
        case "flex-row-space-between":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-between</title>
                    <path d="M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 21.344c1.024 0 1.856 0.832 1.856 1.856v3.456h-21.312v-3.456c0-1.024 0.832-1.856 1.856-1.856h17.6zM26.656 5.344v3.456c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-3.456h21.312zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"></path>
                </svg>
            );
            break;
        case "flex-row-space-around":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-around</title>
                    <path d="M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 17.344c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM24.8 9.344c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"></path>
                </svg>
            );
            break;
        case "flex-row-space-evenly":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>justify-space-evenly</title>
                    <path d="M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 18.656c1.024 0 1.856 0.864 1.856 1.888v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.888 1.856-1.888h17.6zM24.8 8c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.888-1.856 1.888h-17.6c-1.024 0-1.856-0.864-1.856-1.888v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"></path>
                </svg>
            );
            break;
        // Flex Direction
        case "flex-direction-row":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>Row</title>
                    <path d="M23.616 17.472l-5.088 5.184c-0.8 0.8-0.8 2.016 0 2.816s2.016 0.8 2.816 0l8.672-8.928c0.8-0.8 0.8-2.016 0-2.816l-8.544-8.384c-0.8-0.8-2.016-0.8-2.816 0s-0.8 1.984 0 2.784l5.472 5.344-20.8-0.128c-1.056 0-1.984 0.928-1.984 1.984s0.928 2.016 1.984 2.016l20.288 0.128z"></path>
                </svg>
            );
            break;
        case "flex-direction-column":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>Column</title>
                    <path d="M13.216 23.584l-5.216-5.056c-0.8-0.8-1.984-0.8-2.784 0s-0.8 2.016 0 2.816l8.928 8.672c0.8 0.8 1.984 0.8 2.784 0l8.416-8.544c0.8-0.8 0.8-2.016 0-2.816s-2.016-0.8-2.816 0l-5.312 5.472 0.128-20.8c0-1.056-0.928-1.984-2.016-1.984-1.056 0-1.984 0.928-1.984 1.984l-0.128 20.256z"></path>
                </svg>
            );
            break;
        case "flex-direction-row-reverse":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>Row Reverse</title>
                    <path d="M8.416 17.472l5.056 5.184c0.8 0.8 0.8 2.016 0 2.816s-2.016 0.8-2.816 0l-8.64-8.928c-0.8-0.8-0.8-2.016 0-2.816l8.512-8.384c0.8-0.96 2.016-0.8 2.816 0s0.8 1.984 0 2.784l-5.472 5.344 20.8-0.128c1.056 0 1.984 0.928 1.984 1.984s-0.928 2.016-1.984 2.016l-20.256 0.128z"></path>
                </svg>
            );
            break;
        case "flex-direction-column-reverse":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>Column Reverse</title>
                    <path d="M13.216 8.384l-5.216 5.088c-0.8 0.8-1.984 0.8-2.784 0s-0.672-2.144 0.128-2.944l8.928-8.672c0.8-0.8 1.984-0.8 2.784 0l8.416 8.544c0.8 0.8 0.8 1.984 0 2.784s-2.016 0.8-2.816 0l-5.312-5.44v20.928c0 1.056-0.928 1.984-2.016 1.984-1.056 0-1.984-0.928-1.984-1.984l-0.128-20.288z"></path>
                </svg>
            );
            break;
        // Flex Wrap
        case "flex-wrap":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>wrap</title>
                    <path d="M1.344 0c0.736 0 1.312 0.608 1.312 1.344v29.312c0 0.736-0.576 1.344-1.312 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM21.728 5.344c6.656 0 10.272 3.648 10.272 9.312 0 5.568-3.488 9.184-9.888 9.344h-7.648v4.032c0 0.288-0.064 0.544-0.224 0.768l-0.096 0.096c-0.256 0.256-0.544 0.416-0.864 0.448-0.288 0.032-0.544-0.064-0.768-0.192l-0.128-0.096-6.688-6.752c-0.224-0.224-0.32-0.512-0.384-0.864-0.032-0.256 0.032-0.512 0.128-0.736l0.256-0.32 6.528-6.624c0.256-0.256 0.544-0.416 0.864-0.416s0.608 0.096 0.896 0.288c0.192 0.16 0.352 0.384 0.416 0.64l0.064 0.192v4.192h7.232c3.712 0 4.96-1.248 4.96-4 0-2.624-1.184-3.904-4.608-4h-16.704v-5.312h16.384z"></path>
                </svg>
            );
            break;
        case "flex-no-wrap":
            customSVG = (
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                >
                    <title>nowrap</title>
                    <path d="M1.344 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.704-0.512 1.28-1.184 1.344h-0.16c-0.736 0-1.344-0.608-1.344-1.344v-29.312c0-0.704 0.512-1.28 1.184-1.344h0.16zM24 8c0.288-0.032 0.544 0.032 0.768 0.192l0.128 0.096 6.72 6.752c0.224 0.224 0.352 0.512 0.384 0.864 0.032 0.256-0.032 0.48-0.128 0.704l-0.096 0.16-0.16 0.192-6.56 6.624c-0.256 0.256-0.544 0.384-0.864 0.416-0.32 0-0.64-0.096-0.896-0.288-0.224-0.192-0.352-0.416-0.448-0.672l-0.032-0.192v-4.192h-15.616c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h15.616v-4.064c0-0.288 0.064-0.544 0.224-0.736l0.096-0.128c0.256-0.224 0.544-0.384 0.864-0.416z"></path>
                </svg>
            );
            break;
        case "button-fill":
            customSVG = (
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="103"
                    height="37"
                    viewBox="0 0 103 37"
                >
                    <defs></defs>
                    <title>fill-color</title>
                    <path
                        id="Fill_Color"
                        data-name="Fill Color"
                        class="cls-1"
                        d="M0,0V37H103V0ZM75,20H27.93V17H75Z"
                    />
                </svg>
            );
            break;
        case "button-outline":
            customSVG = (
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="103"
                    height="37"
                    viewBox="0 0 103 37"
                >
                    <title>outline</title>
                    <path
                        id="Outline"
                        class="cls-1"
                        d="M102,1V36H1V1H102m1-1H0V37H103V0ZM75,20V17H28.06v3Z"
                    />
                </svg>
            );
    }
    return customSVG;
}
export default renderCustomIcon;
