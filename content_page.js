export function generateHTML(item) {
  // Set default values for item properties
  item.HL = item.HL || 'circle';
  item.url = item.url || 'hier';

  return `
    <div class="mb-4 col-lg-6 col-xl-4">
        <div class="item">
            <div class="item-headline">
                ${item.name || 'Default Headline'}
            </div>
            <div class="item-subline">
                ${item.keywords || 'ein Hilfeangebot'}
            </div>
            <div class="item-highlight">
                <i data-feather="${item.HL}"></i> 
                <div class="item-highlight-text">
                    <a href="${item.url}">${item.url || 'hier'}</a>
                </div>
            </div>
            <div class="item-text">
                ${item.shortdesc || 'klick den Link um zum Angebot zu kommen'}
                <strong>${item.email || ''}</strong>
            </div>
            <div class="item-hours" hidden>
                <div class="item-hours-headline">
                    Sprechzeiten
                </div>
                ${item.hours || 'Rund um die Uhr'}
            </div>
        </div>
    </div>
    <!-- Workaround to trigger feather icon replacement -->
    <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Icons-mini-icon_home.gif" 
        onload="feather.replace();" 
        hidden
    >
  `;
}
