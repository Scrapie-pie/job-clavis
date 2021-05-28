<script>
export default {
    name: 'VNode',
    functional: true,
    
    render(h, context) {
        if (context.data && context.data.staticClass) {
            if (context.props.node.data) {
                if (context.props.node.data.staticClass)
                    context.props.node.data.staticClass +=
                        ' ' + context.data.staticClass
                else
                    context.props.node.data.staticClass =
                        context.data.staticClass
            }
        }

        

        return context.props.node
    }
}
</script>
