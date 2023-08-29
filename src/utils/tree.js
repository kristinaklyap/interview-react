export const update = (whereAmI, rootNodeItems, newRootItem) => {
    const targetRootNode = whereAmI[0];
    const targetRootElement = rootNodeItems[targetRootNode];

    if (whereAmI.length === 0) {
        return [...rootNodeItems, newRootItem]
    }
    return [
        ...rootNodeItems.slice(0, targetRootNode),
        {
            ...targetRootElement,
            items: whereAmI.length > 1
                ? update(whereAmI.slice(1), targetRootElement.items, newRootItem)
                : [...(targetRootElement.items || []), newRootItem]
        },
        ...rootNodeItems.slice(targetRootNode + 1)

    ]
}

export const remove = (whereAmI, rootNodeItems) => {
    const targetRootNode = whereAmI[whereAmI.length - 1] || whereAmI[0];
    const targetRootElement = rootNodeItems[targetRootNode];

    if (whereAmI.length === 0) {
        return []
    }

    return whereAmI.length > 1
        ? [
            ...rootNodeItems.slice(0, targetRootNode),
            {
                ...targetRootElement,
                items: remove(whereAmI.slice(1), targetRootElement.items)
            },
            ...rootNodeItems.slice(targetRootNode + 1)
        ]
        : [...rootNodeItems.slice(0, targetRootNode), ...rootNodeItems.slice(targetRootNode + 1)]
}