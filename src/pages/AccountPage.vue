<template>
    <div>
        <navigation></navigation>
        <div class="mt-3">
            <b-card-group deck>
                <getCustomer></getCustomer>
            </b-card-group>
        </div>     
    </div>
</template>
<script>
import Navigation from '@/components/Nav'
import GetCustomer from '@/components/customer/Get'

export default {
  name: 'customer',
  components: { Navigation, GetCustomer }
}
</script>
