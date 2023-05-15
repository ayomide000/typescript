import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
    itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
        event.preventDefault()

        const input = document.getElementById('newItem') as HTMLInputElement
        const newEntrytext: string = input.value.trim()
        if (!newEntrytext.length)  return  // checking the length property of the text value is not needed. An empty stgring evaluates as false too.

        const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id) + 1 : 1

        const newItem = new ListItem(itemId.toString(), newEntrytext)

        fullList.addItems(newItem)
    })

    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement

    clearItems.addEventListener('click', (): void => {
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList)
}

document.addEventListener('DOMContentLoaded', initApp)
//DOMContentLoaded is an event which happens after DOM content element has fully loaded