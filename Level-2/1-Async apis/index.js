

const Rx = require('rxjs')


//------------------------------
// producer
//------------------------------

const trainer = {
    getSingleSubject() {
        //.........
        return "sub"
    },
    getMultipleSubjects(count) {
        //..........
        let idx = 0
        let iterable = {
            [Symbol.iterator]: function () {
                return {
                    next: function () {
                        idx++
                        let value = idx <= count ? `sub-${idx}` : undefined
                        let done = idx <= count ? false : true
                        return { value, done }
                    }
                }
            }
        }
        return iterable
    },
    getSingleSubjectAsync() {
        //..
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("tnr => resolve/promise promise..")
                //resolve("sub") // push result
                reject("sorry, no time") // push error
            }, 3000)
        });
        return promise;
    },
    getMultipleSubjectsAsync(count) {
        let stream = new Rx.Subject()
        let idx = 0;
        let interval = setInterval(() => {
            idx++
            if (idx <= count) {
                let sub = `sub-${idx}`
                stream.next(sub) // push
            } else {
                clearInterval(interval)
                stream.complete();
            }
        }, 2000)
        return stream;
    }


}


//------------------------------
// consumer
//------------------------------

const employee = {
    doLearn() {

        //....

        //--------------------------------------------------------
        //trainer.getSingleSubject() // pull / sync / block
        //--------------------------------------------------------
        //--------------------------------------------------------
        // let iterable = trainer.getMultipleSubjects(5);
        // for(let sub of iterable){  // .next()  // pull / sync / block
        //     console.log(sub)
        // }
        //--------------------------------------------------------
        // console.log("requesting single subject...")
        // let promise = trainer.getSingleSubjectAsync() // async / non-blocking
        // console.log("got promise, defer action to future with callbacks")
        // promise
        //     .then(subject => {
        //         console.log(subject)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        // console.log("with other work...finished..")
        //--------------------------------------------------------

        console.log("requesting multiple subject...")
        let stream = trainer.getMultipleSubjectsAsync(5)
        console.log("got stream, defer action to future with callbacks")
        stream
            .subscribe(subject => {
                console.log(subject)
            }, error => {
                console.log(error)
            }, () => {
                console.log("thanks for all subjects..")
            })
        console.log("with other work...finished..")
    }
}
employee.doLearn();