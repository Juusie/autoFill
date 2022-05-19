const app = Vue.createApp({


    data() {
        return {
            title: '',
            location: '',
            writer: '',
            date: '',
            time: '',
            status: '',
            approved: '',
            summary: '',
            story: '',
            stuff: '',
            stuff2: '',
            titleStuff: '',
            help: ''

        }
    },
    methods: {

        fillInForm() {
            console.log('button')
            this.date = Date().toString()
            this.location = 'Almere'
            this.status = 'Concept'
            this.approved = 'Julius van Oosterhout'
            this.stuff = this.story
            this.titleStuff = this.title
            this.stuff2 = this.summary
            if (this.writer != '') {

                this.help = this.help + ' ' + this.writer

            }

        },
        moveOn(){
            console.log('mouse is on')
        },
        moveOff(){
            console.log('mouse is off')
        }
    }
})

app.mount('#app')

