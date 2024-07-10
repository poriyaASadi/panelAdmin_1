// component for header box select 

class headerCompenent extends HTMLElement {
    constructor () {
        super()
        this.innerHTML = `
                                              <!-- select box component -->
                                       <div class="selectBox_header">
                                        <div class="box_select_parentComponent">
                                            <!-- .... -->
                                             <div class="selectbox">
                                                <p>Dropdown</p>
                                             </div>
                                             <div class="selectbox">
                                                <p>Dropdown</p>
                                             </div>
                                             <div class="selectbox">
                                                <p>Dropdown</p>
                                             </div>
                                             <div class="selectbox">
                                                <p>Dropdown</p>
                                             </div>
                                        </div>
                                       </div>
                                      <!-- select box component finish -->
        `
    }
}
window.customElements.define('header-selector', headerCompenent)