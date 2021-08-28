<div class="container">
    <div class="left lines">
        <div class="secondary top" />
        <div class="middle" />
        <div class="secondary bottom" />
    </div>
    <div class="box"><div /></div>
    <div class="right lines">
        <div class="secondary top" />
        <div class="middle" />
        <div class="secondary bottom" />
    </div>
    <div class="sign">!</div>
</div>

<style>
    * {
        box-sizing: border-box;
    }
    .container {
        display: flex;
        align-items: center;
        margin: 0 0 3rem 0;
        position: relative;
        height: 100%;
    }
    .box {
        display: flex;
        justify-content: center;
        transform: rotate(45deg);
        margin: 0 16px;
        border: 2px solid rgb(62, 220, 252);
        width: 60px;
        height: 60px;
        padding: 5px;
    }
    .box > div {
        background-color: rgb(28, 108, 153);
        width: 100%;
        height: 100%;
    }
    .sign {
        font-family: "Trebuchet MS", sans-serif;
        position: absolute;
        color: rgb(62, 220, 252);
        font-size: 3rem;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        text-align: center;
        line-height: 130%;
    }
    .lines {
        position: relative;
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .middle {
        position: absolute;
        height: 2px;
        width: 100%;
        background-image: linear-gradient(
            90deg,
            transparent,
            transparent,
            rgb(62, 220, 252),
            rgb(62, 220, 252)
        );
    }
    .left .middle {
        right: 8px;
    }
    .right .middle {
        left: 8px;
        transform: rotate(180deg);
    }
    .middle::after {
        content: "";
        position: absolute;
        background-color: rgb(62, 220, 252);
        width: 4px;
        height: 4px;
        right: -8px;
        transform: translateY(-1px);
    }

    .secondary {
        position: absolute;
        width: 50%;
        height: 2px;
        background-image: linear-gradient(
            90deg,
            transparent,
            rgb(62, 220, 252)
        );
    }
    .secondary::after {
        content: "";
        position: absolute;
        width: 26px;
        height: 2px;
        right: 0;
        transform: translate(21px, -9px) rotate(-45deg);
        background-image: linear-gradient(
            90deg,
            rgb(62, 220, 252),
            transparent
        );
    }
    .left .secondary.top {
        right: -4px;
        transform: translateY(-9px);
    }
    .left .secondary.bottom {
        right: -4px;
        transform: translateY(9px) rotateX(180deg);
    }
    .right .secondary.top {
        left: -4px;
        transform: translateY(-9px) rotateY(180deg);
    }
    .right .secondary.bottom {
        left: -4px;
        transform: translateY(9px) rotateZ(180deg);
    }
</style>
