const customization = require('%app.core%/customization.js');

customization.registerRecordAction({
    name: 'share',
    types: ['right-menu-detail'],
    isVisible: false,
});

customization.registerRecordAction({
    name: 'duplicate',
    types: ['right-menu-detail'],
    isVisible: false,
});

customization.registerRecordAction({
    name: 'link-related',
    types: ['right-menu-detail'],
    isVisible: false,
});
    
