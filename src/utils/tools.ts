export const getMonthShort = (dateString:string) => {
    const date =  dateString.split('T')[0];
    const dateObj = new Date(date);
    const monthName = dateObj.toLocaleString("default", { month: "short" })
    return monthName
}


export function randomString(size: number) {
    const i2hex = (i: number) => ("0" + i.toString(16)).slice(-2)
    const r = (a: string, i: number): string => a + i2hex(i)
    const bytes = crypto.getRandomValues(new Uint8Array(size))
    return Array.from(bytes).reduce(r, "")
}

export function randomBytes(size: number) {
    return crypto.getRandomValues(new Uint8Array(size))
}
export function initials(f: string,l:string): string{
    const fi = f.charAt(0)
    const li = l.charAt(0)
    return `${fi} ${li}`
}

export function getKeysWithoutValues(obj:any):string[]{
    const keysWithoutValues = [];
    for (const key in obj) {
      if (!obj[key]) {
        keysWithoutValues.push(key);
      }
    }
    
    return keysWithoutValues;
}

export function cleanArray(old_arr: any[], new_arr: any[]): any[] {
    for (let i = 0; i < new_arr.length; i++) {
        const new_id = new_arr[i].id;
        const existing_id = old_arr.find((value) => value.id === new_id);
        if (!existing_id) {
          old_arr.push(new_arr[i]);
        }
      }
    return old_arr;
}

function isObject(item: any): boolean {
    return item && typeof item === "object" && !Array.isArray(item)
}

/** Deep merge two objects */
export function merge(target: any, ...sources: any[]): any {
    if (!sources.length) return target
    const source = sources.shift()

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
        if (isObject(source[key])) {
            if (!target[key]) Object.assign(target, { [key]: {} })
            merge(target[key], source[key])
        } else {
            Object.assign(target, { [key]: source[key] })
        }
        }
    }

    return merge(target, ...sources)
}


export function truncateString(str: string, num:number): string {
    if (str.length > num) {
        return `${str.substring(0, num)}.....`
    }
    return str
}

export function getFormattedDateString(date: string): string {
    const new_date = new Date(date);
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new_date);
    const monthName = monthNames[new_date.getMonth()];
    let dayOfMonth = new_date.getDate();
    let suffix = "th";
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        suffix = "st";
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        suffix = "nd";
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        suffix = "rd";
    }
    const formattedDate = `${dayOfWeek}, ${dayOfMonth}${suffix} ${monthName} ${new_date.getFullYear()}`

    return formattedDate
}