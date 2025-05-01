import React from 'react'
import './FAQ.css'
function FAQ() {
  return (
     <section id="faq" class="justify-content-center bg-light">
        <div class="container"></div>
            <br />
            <br />
            <h5 class="text-center my-2">
            <span class="badge rounded-pill bg-primary-subtle text-primary py-2 px-3 fw-semibold">F.A.Q.</span>
            </h5>
            <h2 class="text-center mt-2 mb-5">
            <strong>Frequently Asked <span class="text-primary">Questions</span></strong>
            </h2>
            <br />

            <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Non consectetur a erat nam at lectus urna duis?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <p class="fw-medium">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Feugiat scelerisque varius morbi enim nunc faucibus?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p class="fw-medium">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Dolor sit amet consectetur adipiscing elit pellentesque?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p class="fw-medium">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p class="fw-medium">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    Tempus quam pellentesque nec nam aliquam sem et tortor?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p class="fw-medium">Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                    Perspiciatis quod quo quos nulla quo illum ullam?
                </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p class="fw-medium">Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default FAQ
