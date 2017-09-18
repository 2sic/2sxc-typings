

// todo

class ToolbarConfig {
    entityId: number = null;
    sortOrder: number = null;
    useModuleList: boolean = false;
    isPublished: boolean = true;
}

class QConfigId extends ToolbarConfig {
    constructor(
        entityId: number,
        isPublished: boolean = true
    ) {
        super();
    }
}

class QConfigListItem extends ToolbarConfig {
    constructor(
        sortOrder: number,
        isPublished: boolean = true,
    ) {
        super();
        this.useModuleList = true;
    }
}

// class QConfigEntity extends ToolbarConfig {
//     constructor(
//     )
// }