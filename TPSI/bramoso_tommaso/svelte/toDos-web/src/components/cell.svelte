<div class = "cell">
    <slot />
</div>

<style>
    div {
        border: 1px solid grey;
        margin: 0px 5px 30px 5px;
    }

    .cell {
        border-bottom: 3px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-top: 10px;
        color: #525252;
        line-height: 32px;
        font-size: 18px;
    }

    .cell-last {
        border-right: none;
    }
</style>