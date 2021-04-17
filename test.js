function modifyTableCell(rowIndex, columnIndex, newText) {
    var myTable = document.getElementById('table');
    var tr = myTable.rows[rowIndex].cells[columnIndex];
    var tds = tr.getElementsByClassName('td');
    var oldText = tds.item(columnIndex).text.toString();
    tds.item(columnIndex).textContent = newText;
    return oldText;
}
function setup() {
    var currentBtn = document.getElementById('btn');
    let type = currentBtn.style.display;
    if (type === "none") {
        currentBtn.style.display = "block";
    }
    else if (type === "block") {
        currentBtn.style.display = "none";
    }
}





function removeItem(id) {
    var child=document.getElementById(id);
    var parent = child.parentElement;
    parent.removeChild(child);
}

document.body.innerHTML = `
<table id = "table">
    <tbody>
        <tr>
            <td>Isla</td>
            <td>Leo</td>
            <td>Samuel</td>
        </tr>
        <tr>
            <td>Mia</td>
            <td>Evie</td>
            <td>Freya</td>
        </tr>
        <tr>
            <td>Olivia</td>
            <td>Ava</td>
            <td>George</td>
        </tr>
    </tbody>
</table>`;

console.log(modifyTableCell(0, 1, "Joe"));




class TabStrip extends React.Component {

    render() {
        return (
            <div className="TabStrip">
            {this.props.titles.map((title, index) => {
                    const className = "TabStrip-title" +
                        (this.isActive(index) ? " TabStrip-title-active" : "");

                    return (
                        <div onClick={() => this.setActiveIndex(index)} key={index} className={className}>
                        {title}
                        </div>
                );
                })}
            </div>
    );
    }

    isActive(index) {
        return index === this.getActiveIndex();
    }

    setActiveIndex(activeIndex) {

    }

    getActiveIndex() {

    }
}

class App extends React.Component {
    state = { activeIndex: 1 };
    render() {
        return (<div>
            <TabStrip activeIndex={this.state.activeIndex}
        onActiveIndexChange={activeIndex => {
            this.setState({
                activeIndex
            });
        }}
        titles={["My account", "Settings", "Dashbboard"]}
        />
        </div>);
    }
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);