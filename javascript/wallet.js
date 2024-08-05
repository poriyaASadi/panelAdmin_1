const box_tableInvoices = $.querySelector('.box_table-Invoices');
const BtnViewAll_Invoice = $.getElementById('BtnViewAll_Invoice');
const box_addNewcard = $.querySelector('.box_addNewcard');
const boxBlur = document.querySelector('.blurMain');
const boxFromaddCard =   document.querySelector('.boxFormCard');
const closeBox = document.querySelector('.closeBox');

BtnViewAll_Invoice.addEventListener('click' , () => {
  for(let index = 0 ; index < 10 ; index++)  {
    box_tableInvoices.insertAdjacentHTML('beforeend' , `
        <div class="row-Invoices">
                    <div class="right-row_Invoices">
                      <span>March, 01, 2020</span>
                      <p>#MS-415646</p>
                    </div>
                    <div class="left-row_Invoices">
                      <span>$180</span>
                      <div>
                        <svg
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                            fill="#344767"
                          />
                        </svg>
                        PDF
                      </div>
                    </div>
                  </div>
        `);
}  
} , {once:true});


box_addNewcard.addEventListener('click' , () => {
  boxBlur.classList.add('activeModule');
  boxFromaddCard.classList.add('activeModule');
});

closeBox.addEventListener('click' , () => {
  boxBlur.classList.remove('activeModule');
  boxFromaddCard.classList.remove('activeModule');
})