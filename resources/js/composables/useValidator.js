import formValidation from '@/plugins/formvalidation/dist/es6/core/Core'
import Trigger from '@/plugins/formvalidation/dist/es6/plugins/Trigger'
import Bootstrap5 from '@/plugins/formvalidation/dist/es6/plugins/Bootstrap5'

const validator = (form, fields) => {

    const validator = formValidation(
        form,
        {
            fields: fields,
            plugins: {
                trigger: new Trigger(),
                bootstrap: new Bootstrap5({
                    rowSelector: '.fv-row',
                    eleInvalidClass: 'is-invalid',
                    eleValidClass: 'is-valid'
                })
            }
        }
    )


    return validator

}

export default validator
