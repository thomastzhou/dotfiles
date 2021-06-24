export const customStyles = /* css */ `
.simple-bar {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    height: 30px;
}

.simple-bar--floating.simple-bar--process {
    left: 0;
    width: calc(100% - 40px);
    border-radius: 10px;
    box-shadow: none;
    border: 1px solid #e9e5e5;
}

.spaces {
    padding-left: 7px;
}

.simple-bar--floating.simple-bar--data {
    right: 0px;
}

.simple-bar--floating.simple-bar--data, .simple-bar--no-bar-background .spaces, .simple-bar--no-bar-background .process:not(:empty) {
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: none;
    border-radius: 10px;
}

.process {
    display: none !important;
}

.simple-bar--floating.simple-bar--spaces {
    left: 0px;
}

.time, .date-display {
    background-color: var(--accent) !important;
}

.data-widget {
    background-color: var(--foreground);
    color: var(--black) !important;
}

.spotify__inner {
    max-width: 400px;
}

.data-widget {
    box-shadow: none;
}

button {
    box-shadow: none !important;
    transition: opacity 160ms var(--transition-easing) !important;
}

button:hover {
    opacity: 0.8;
}
`
