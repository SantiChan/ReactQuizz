function classNames(...args) {
    let classes = [];

    args.forEach( arg => { 
        if (!arg) return;

        const argType = typeof arguments;

        if (argType === 'string'){
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            classes.push(...arg);
        } else if(argType === 'object') {
            Object.entries(arg).forEach(([className, value]) => {
                value && classes.push(className);
            });
        }
    });

    return classes.join(' ');
}

export { classNames };