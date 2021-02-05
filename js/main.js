$(document).ready(function() {

    const arrayServices = [
        {
            id: 3,
            image: 'images/hotstone.png',
            title: 'Himalayan Salt Stone Massage',
            description: 'A warm crystal salt stone melts away pain and muscle tension, lightly exfoliating and is highly relaxing, emits negative ioin and support a healthy respiratory system. <br><br>Formed over 250 million years at the Himalayan Mountain. It contains naturally occuring minerals and elements. Resonating at the earth\'s frequency<br>Himalayan salts have long been used for health and healing in Eastern traditions. The stone natural structure and natural resonant frequency help to realign energy pathways and restore balance to the CNS.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 650'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 750'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 850'
                }
            ]
        },
        {
            id: 1,
            image: 'images/hilotbentosa.png',
            title: 'Hilot Traditional Massage w/ Bentosa',
            description: 'A traditional Hilot treatment entails deep massage with the goal relaxing the mind and healing the body. Warm banana leaf strips laced with cocconut oil are often run over the body to clear energy blockage, as banana leaves contains both medical and herbal elements and natural ionizer.<br><br>Bentosa is a method of breaking up the blockage to restore the body\'s natural flow of energy that uses glass cups, suction device to disperse congestion, excellent for lungs and respiratory condition.',
            pricelist: [
                {
                    minutes: '45 minutes<br>back massage only',
                    price: 'P 500'
                },
                {
                    minutes: '75 minutes<br>with full body massage',
                    price: 'P 950'
                }
            ]
        },
        {
            id: 2,
            image: 'images/bamboo.png',
            title: 'Deep Tissue/Bamboo Massage',
            description: 'Uses more pressure than a Swedish massage using our variety of specialized movements using a warm bamboo sticks, which helps for those who have tension in deep muscles. Help relax stressed or overworked muscles.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 550'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 650'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 850'
                }
            ]
        },
        {
            id: 5,
            image: 'images/thai.png',
            title: 'Thai Traditional Therapy',
            description: 'Involves rhythmic forms of Yoga-like stretching, acupressure, energy meridian work. A holistic approach to healing, to stimulate the body\'s natural healing process.<br><br>Your therapist will use developes sensitivity and intuition to release stagnant energy, eliminate disease and resstore balance in the flow of energy through stimulating the SEN lines.',
            pricelist: [
                {
                    minutes: '90 minutes',
                    price: 'P 750'
                },
                {
                    minutes: '120 minutes',
                    price: 'P 950'
                }
            ]
        },
        {
            id: 4,
            image: 'images/couples.png',
            title: 'Couples Massage',
            description: 'Enjoy a relaxing full body tissue massage lying side by side. THe tandem treatment invites couples to get more closer and re-connect with each other. Couples isn\'t only for romance. Mother-Daugher, Father-Son, and Best friends duos may also enjoy side by side services.',
            pricelist: [
                {
                    minutes: '60 minutes',
                    price: 'P 900'
                },
                {
                    minutes: '75 minutes',
                    price: 'P 1,050'
                },
                {
                    minutes: '90 minutes',
                    price: 'P 1,250'
                }
            ]
        },
        {
            id: 0,
            image: 'images/aromatherapy.png',
            title: 'Aromatherapy Massage',
            description: 'Combines the therapeutic benefits of using a blend of premium carrier oil and pure essential oil with some Swedish techniques for relaxation, improvement of circulation and these effects in physiological, psychological, and pharmalogical aspects of energy bodies.',
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
            id: 6,
            image: 'images/foot.png',
            title: 'Foot Therapy',
            description: 'Tailored foot session of pure foot awareness integrating a mix of threpies to restore the flow, which helps you to clear any channels of blockage energy.',
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
            id: 8,
            image: 'images/green-olive.png',
            title: 'Acupuncture Therapy',
            description: 'This therapy service is by doctor\'s appointment only.',
            pricelist: [
                {
                    minutes: 'TBA',
                    price: 'TBA'
                }
            ]
        },
        {
            id: 9,
            image: 'images/hotstone.png',
            title: 'Hotstone Therapy',
            description: 'Ancient tradition believed that stone have a quality w/ in them that represents the care of the earth that emits a sense of surrounding. VITALITY and ENERGY in the body. Our stone is bathe w/ warm water and amount them w/ our local and very own Filipino aromas. Utilizing volcanic basalt stone w/ specialized massage techniques will allow you a deeper sense of relaxation, melts muscles tension and equate the spine.',
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
            id: `10`,
            image: 'images/hotstone.png',
            title: 'Jade Therapy',
            description: 'Jade is an ancient protective stone known for having healing properties w/c relax the Nervous System, slows down the process of cell aging and strengthen the body natural defenses. It is associated w/ heart chakra and lower abdomen. Because of its composition of iron, calcium and magnesium it gives off far infrared heat (facilitate supply of oxygen) Jade stone is the only massage stone that can hold both heat and cold equally well.',
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

        const filteredData = arrayServices.filter(data => data.id == serviceID);
        const dataSelected = filteredData[0];
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

    $('a').click(function(event){
        if(this.hash !== '') {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() { 
                window.location.hash = hash;
            })
        } 
    })

})