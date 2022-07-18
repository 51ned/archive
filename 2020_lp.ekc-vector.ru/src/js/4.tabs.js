// Tabs in 'expertise' block
var tabs = (function () {
  return function (selector, config) {
    var
      _tabsContainer = (typeof selector === 'string' ? document.querySelector(selector) : selector);
    var _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs-link-active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs-pane-show');
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs-link-active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs-pane-show');
      }
      tabsLinkTarget.classList.add('tabs-link-active');
      tabsPaneTarget.classList.add('tabs-pane-show');
      var eventTabShow = new CustomEvent('tab.show', { bubbles: true, detail: { tabsLinkPrevious: tabsLinkActive } });
      tabsLinkTarget.dispatchEvent(eventTabShow);
    }
    var _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _tabsContainer.querySelectorAll('.tabs-link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    }
    var _setupListeners = function () {
      _tabsContainer.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        if (!tabsLinkTarget.classList.contains('tabs-link')) {
          return;
        }
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });
    }
    _setupListeners();
    return {
      switchTabTo: function (index) {
        _switchTabTo(index);
      }
    }
  }
}());
tabs('.tabs');