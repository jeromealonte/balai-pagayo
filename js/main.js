$(document).ready(function() {

    const arrayServices = [
        {
            id: 0,
            image: 'images/green-olive.png',
            title: 'Swedish',
            description: 'Swedish Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 450'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 550'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 650'
                },
                {
                    minutes: '120 minutes',
                    price: 'P 650'
                }
            ]
        },
        {
            id: 1,
            image: 'images/bamboo.png',
            title: 'Shiatsu',
            description: 'Shiatsu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 850'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 250'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 950'
                }
            ]
        },
        {
            id: 2,
            image: 'images/oil-bottle-yellow.png',
            title: 'Bamboo',
            description: 'Bamboo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 150'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 250'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 350'
                }
            ]
        },
        {
            id: 3,
            image: 'images/olives.png',
            title: 'Himalayan Salt Stone',
            description: 'Hiamalayan Salt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 450'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 550'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 650'
                }
            ]
        },
        {
            id: 4,
            image: 'images/flower.png',
            title: 'Thai Traditional Therapy',
            description: 'Thai Therapy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 400'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 450'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 500'
                }
            ]
        },
        {
            id: 6,
            image: 'images/oil-bottle-yellow.png',
            title: 'Foot Therapy',
            description: 'Foot Therapy ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '45 minutes',
                    price: 'P 300'
                },
                {
                    minutes: '60 minutes',
                    price: 'P 350'
                }
            ]
        },
        {
            id: 5,
            image: 'images/green-olive.png',
            title: 'Hilot Traditional w/ Bentosa',
            description: 'Hilot with Bentosa ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, cum numquam ut neque quaerat illum reprehenderit alias ipsam dolorum inventore exercitationem dolores sed nihil ea nemo. Quaerat mollitia iure modi.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 450'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 500'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 550'
                }
            ]
        }
        
    ]

    createServiceItem();

    function createServiceItem() {
        for(let service of arrayServices) {
            
            const serviceItemElement = $(`
            <div class="col-md-4 col-sm-12 spacer-left-right">
                <div class="service-circle flex-container flex-align-center flex-justify-center">
                    <img src="${service.image}" alt="green-olive">
                </div>
                <div class="service-item">
                    <h4>${service.title}</h4>
                    <hr>
                    <div class="price-list-container"></div>
                    <button type="button" id="${service.id}" class="btn btn-success bp-button" data-toggle="modal" data-target="#exampleModal">View Details</button>
                </div>
            </div>
            `)
            $('.service-container').append(serviceItemElement);
        }
    }

    function displayModal(serviceID) {
        const modalServiceBody = $('.modal-service-body');
        modalServiceBody.html('');

        const dataSelected = arrayServices[serviceID];
        $('.modal-massage-title').html(dataSelected.title);
        $('.modal-content-description').html(dataSelected.description);

        for(let price of dataSelected.pricelist) {
            const trow = $(`
            <tr>
                <td>${price.minutes}</td>
                <td>${price.price}</td>
            </tr>`)

            modalServiceBody.append(trow);
        }
        
    }

    $('.bp-button').click(function(e) {
        const serviceID = $(this).attr('id');
        displayModal(serviceID);
    })

    // $('a').click(function(event){
    //     if(this.hash !== '') {
    //         event.preventDefault();
    //         let hash = this.hash;
    //         console.log(hash);
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function() { 
    //             window.location.hash = hash;
    //         })
    //     } 
    // })

})