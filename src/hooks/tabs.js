function mostrarContenido(tabId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    var tabLinks = document.querySelectorAll('.nav-link');
    tabLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    var selectedTabContent = document.getElementById(tabId + '-content');
    if (selectedTabContent) {
        selectedTabContent.style.display = 'block';
        selectedTabContent.classList.add('active');

        var selectedTabLink = document.querySelector('a[href="#' + tabId + '"]');
        if (selectedTabLink) {
            selectedTabLink.classList.add('active');
        }
    }
}