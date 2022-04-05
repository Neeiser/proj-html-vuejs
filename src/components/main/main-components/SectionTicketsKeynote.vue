<template>
    <section>
        <div class="text-vertical-centering ticket-container">
            <h2>TICKETS</h2>
            <div class="ticket-box">
                <div class="ticket-item"
                v-for="item in arrTickets" 
                :key="item.id">
                    <div class="header-ticket">
                        <h3>{{item.ticketName.toUpperCase()}}</h3>
                        <span>{{item.ticketPrice.toUpperCase()}}</span>
                    </div>
                    <small>{{item.ticketServices1}}</small>
                    <small>{{item.ticketServices2}}</small>
                    <small>{{item.ticketServices3}}</small>
                    <small>{{item.ticketServices4}}</small>
                    <small>{{item.ticketServices5}}</small>
                    <button class="btn-style">BOOK NOW</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionTicketsKeynote',
    data(){
        return{
            arrTickets:[
                {
                    ticketName: 'one day pass',
                    ticketPrice: 'free',
                    ticketServices1: 'One Day Access', 
                    ticketServices2: 'Coffee Break',
                    ticketServices3: 'Lunch(International Buffet)',
                    ticketServices4: 'Document Sheets',
                    ticketServices5: '50USD Voucher For Next Event',
                },
                {
                    ticketName: 'four day passes',
                    ticketPrice: '750.00 USD',
                    ticketServices1: 'Four Day Access', 
                    ticketServices2: 'Coffee Break',
                    ticketServices3: 'Lunch(International Buffet)',
                    ticketServices4: 'Document Sheets',
                    ticketServices5: '100USD Voucher For Next Event',
                },
                {
                    ticketName: 'two day pass',
                    ticketPrice: '580.00 USD',
                    ticketServices1: 'Two Day Access', 
                    ticketServices2: 'Coffee Break',
                    ticketServices3: 'Lunch(International Buffet)',
                    ticketServices4: 'Document Sheets',
                    ticketServices5: '70USD Voucher For Next Event',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/style';

section{
    background-image: url('../../../assets/img/photodune-8523683-speaker-at-business-convention-and-present (1).jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .ticket-container{
        height: 600px;
        justify-content: space-evenly;
        h2{
            font-size: 2rem;
        }
        .ticket-box{
            display: flex;
            .ticket-item{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                background-color: $white;
                padding: 20px;
                height: 350px;
                width: 300px;
                position: relative;
                margin: 0px 15px;
                .header-ticket{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    span{
                        font-weight: 700;
                        color: $scarlet;
                    }
                }
                .btn-style{
                    background-color: $scarlet;
                    border-radius: 0px;
                    width: 300px;
                    height: 50px;
                    position: relative;
                    bottom: -20px;
                    color: $white;
                    padding: 0px;
                }
            }
        }
    }
}

</style>