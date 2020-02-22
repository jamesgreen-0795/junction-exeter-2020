export default {
    getChildRelative(child, parent){
        var childPos = child.getBoundingClientRect();
        var parentPos = parent.getBoundingClientRect();
        var childOffset = {
            x: childPos.top - parentPos.top,
            y: childPos.left - parentPos.left
        };
        return childOffset;
    },
    center(coords, parent){
        var parentPos = parent.getBoundingClientRect();
        return {
            x: coords.x + (parentPos.width / 2),
            y: coords.y + (parentPos.height / 2),
        };
    },
}
