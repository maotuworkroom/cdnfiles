// 在 Vue 实例外部定义一个变量来存储对话框实例


Vue.createApp({
    data() {
        return {
            question: '',
            messages: JSON.parse(localStorage.getItem('currentChat')) || [],
            darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
            allSelected: false,
            models: JSON.parse(localStorage.getItem('savedModels')) || [
                        { name: "🎐GPT-4o（128k）", url: "https://gpt4o128.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: false }, 
                        { name: "💍GPT-4o联网", url: "https://gs.aytsao.cn/v1/chat/completions", model: "gpt-4o-search", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "💎GPT-4o", url: "https://gpt4oapi.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: true }, 
                        { name: "💭o1联网", url: "https://gs.aytsao.cn/v1/chat/completions", model: "o1-search", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🗯️o1", url: "https://gs.aytsao.cn/v1/chat/completions", model: "o1", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "🏯o3minihigh", url: "https://gs.aytsao.cn/v1/chat/completions", model: "o3-mini-high", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "💨GPT-4Turbo", url: "https://gpt4tapi.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: false }, 
                        { name: "💍GPT-4o", url: "https://gs.aytsao.cn/v1/chat/completions", model: "gpt-4o", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "👑GPT-4", url: "https://api.chatanywhere.tech/v1/chat/completions", model: "gpt-4", key: "sk-IglcsvDzHFBbxvULdYPplbgWsr8hCzz4tNYEg7fmvumvOX1C", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true }, 
                        { name: "👑GPT-4(2)", url: "https://g4api.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: true }, 
                        { name: "☝️o3mini", url: "https://happyshua-duckduckgo-15.deno.dev/v1/chat/completions", model: "o3-mini", key: "", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🎺4omini", url: "https://lmc-duckduckgo-92.deno.dev/v1/chat/completions", model: "gpt-4o-mini", key: "", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤓Claude3.5sonnet", url: "https://gs.aytsao.cn/v1/chat/completions", model: "claude-3-5-sonnet-search", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤓👀3.5sonnet联网", url: "https://gs.aytsao.cn/v1/chat/completions", model: "claude-3-5-sonnet", key: "sk-genspark2api", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
		        { name: "✏️Claude3haiku", url: "https://lmc-duckduckgo-49.deno.dev/v1/chat/completions", model: "claude-3-haiku", key: "", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "💪🏻Claude3sonnet", url: "https://duck2api.com/v1/chat/completions", model:"free-claude-3-sonnet-20240229", key: "sk-zHogRqBTTc8SfyKfF9EiVNhGqBhMXEQCHSG2lZBPMsg1T1ck", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🔮Llama3.1", url: "https://lmc-duckduckgo-56.deno.dev/v1/chat/completions", model: "llama", key: "", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🦪Mixtral", url: "https://lmc-duckduckgo-38.deno.dev/v1/chat/completions", model: "mixtral", key: "", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤪🎏Bing创造", url: "https://bing.xinu.ink/v1/chat/completions", key: "sk-123456", requestType: "bing", response: '', responseHtml: '', loading: false, error: null, selected: false },
						{ name: "😜🎏Bing均衡", url: "https://japan.xinu.ink/v1/chat/completions", key: "sk-123456", requestType: "bingbl", response: '', responseHtml: '', loading: false, error: null, selected: false },
						{ name: "😝🎏Bing精确", url: "https://bing1.xinu.ink/v1/chat/completions", key: "sk-123456", requestType: "bingpr", response: '', responseHtml: '', loading: false, error: null, selected: false },
						{ name: "🥹NovaPro", url: "https://cla35son.xinu.ink/v1/chat/completions", model:"nova-pro-v1-0", key: "TzdteklSSkhhfHx8CmhEaG1XSEF5TlRWbVZtNTVZakl5Wm5sUWJURndaakJxYzFSc2RHbGpZMEpwWjU5UTR3QUFBQUJrTkRKaE9EazBNQzFrT1ROakxUUTNNVEl0WVdReFl5MWhZVEExWmpVMU5EVTBaR1k9fHx8YXdzY2NjPWV5SmxJam94TENKd0lqb3hMQ0ptSWpveExDSmhJam94TENKcElqb2lZemc0WldZM1l6Y3ROakUxWWkwMFpETmtMV0psTnpJdE5UVmpaR1k1WkdVd056VTBJaXdpZGlJNklqRWlmUT09OyBpZFRva2VuPWV5SnJhV1FpT2lKT1JGazBWbnBsZGt4YVdtRkJPR1ZEYjNsQ2IwbDBZVFExVkhaYU5taHRaVW94YVRaelNUVXdiMWxuUFNJc0ltRnNaeUk2SWxKVE1qVTJJbjAuZXlKaGRGOW9ZWE5vSWpvaVpFaDJRV0ZwZVVvM1VtWkhaMGxTZEZObVRFeE1RU0lzSW5OMVlpSTZJakE0WXpjelpHUXlMVEExT0RZdE5EY3dZUzFoTm1ZeExUYzRNR1l4TkRrelpXWTBNU0lzSW1OdloyNXBkRzg2WjNKdmRYQnpJanBiSW5WekxXVmhjM1F0TVY5RlFYRlBkMGcwUzNoZlIyOXZaMnhsSWwwc0ltVnRZV2xzWDNabGNtbG1hV1ZrSWpwbVlXeHpaU3dpYVhOeklqb2lhSFIwY0hNNlhDOWNMMk52WjI1cGRHOHRhV1J3TG5WekxXVmhjM1F0TVM1aGJXRjZiMjVoZDNNdVkyOXRYQzkxY3kxbFlYTjBMVEZmUlVGeFQzZElORXQ0SWl3aVkyOW5ibWwwYnpwMWMyVnlibUZ0WlNJNklrZHZiMmRzWlY4eE1ERXlOVGd4TnpVeE56TTJNRE01T0RVMk1qSWlMQ0puYVhabGJsOXVZVzFsSWpvaVRVTWlMQ0p1YjI1alpTSTZJblY2VlVwd2RHOXpiR2hGTkhabFRIZGhTR3hYVG5kbGVYQnNiV1JyTkV0U1pVWXhjR281TFVka1FsUkhVVzlzY1ZWUlkwbEZla2xPTjB0RlJYUXlkVTlyYW1wMWFVSnBjMjh0TWtWcU4wa3ljR3RYTWxSbk5qSmxTekZLVjBoRFNrdHpZVzVYVjB0alJXSnRRa0ZuWkRWTFpsVm5VSEpvVTA5S1JEbE1hak0xU1ZCYU1HbGxabGRTVFdwTVRVWlpaalJCVDJOa2FtcDNjV3BFT0U5T1ZFRmtVM0JPTWpGYVdUWTRieUlzSW1OMWMzUnZiVHAxYzJWeVNXUWlPaUl6TmpNMU9Ea2lMQ0pqZFhOMGIyMDZZMmwwZVNJNklreHZjeUJCYm1kbGJHVnpJaXdpYjNKcFoybHVYMnAwYVNJNklqYzRZVE5sTkRNeExURmlZak10TkdFMk5TMWlOalpsTFRJeU1ERm1NREUyWlRjNFlTSXNJbUYxWkNJNklqVjJaV0UwZFdjNWJuUndjWFIxY0dock5XbHlkREJrWWpCdElpd2lZM1Z6ZEc5dE9tTnZkVzUwY25sRGIyUmxJam9pVlZNaUxDSnBaR1Z1ZEdsMGFXVnpJanBiZXlKMWMyVnlTV1FpT2lJeE1UTTRNRGd6TWpFd09UVTVPRGt3TXpJMk9URWlMQ0p3Y205MmFXUmxjazVoYldVaU9pSkhiMjluYkdVaUxDSndjbTkyYVdSbGNsUjVjR1VpT2lKSGIyOW5iR1VpTENKcGMzTjFaWElpT201MWJHd3NJbkJ5YVcxaGNua2lPaUowY25WbElpd2laR0YwWlVOeVpXRjBaV1FpT2lJeE56TTRORGN4T0RFek16UTNJbjFkTENKMGIydGxibDkxYzJVaU9pSnBaQ0lzSW1GMWRHaGZkR2x0WlNJNk1UY3pPRFEzTXpZd09Td2libUZ0WlNJNkl1V0ltRTFESWl3aVpYaHdJam94TnpNNE5EYzBOVEE1TENKcFlYUWlPakUzTXpnME56TTJNRGtzSW1aaGJXbHNlVjl1WVcxbElqb2k1WWlZSWl3aWFuUnBJam9pTVRsaFlXVTJNR0l0TVRobE5TMDBZMkkzTFRnek4yTXRPRGM1WVRNMU5ERTJNRFV3SWl3aVpXMWhhV3dpT2lKdGVXeGhibVEyTmpZNE9EaEFaMjFoYVd3dVkyOXRJbjAuZk5CaUZUUVJUQ1h6ZHd1OFRBMlZLV3E4MjJxaEdLSTBQS0hEbW1iZzV2OFlydVNId0xOZUl1cllLUHhEN2Rja2pCem5HWUJPcElpWVhxTEl4eG50QTJ2WFVlWk1PMnR5amQtY0dlQkM2TldVSDF3OVQ3M25nUEFMVVJtSHBrQ01uZ29Pdm9scEE3dmJXbXNDS2I3bV9OUTM3N25sSnNMUVc0SDhRaEhuRnBGdXZEV0RHanlaTUQ3aFBzMXBVNVozUDNJelhCTE5SVGRMeS1GMm5pZjAyMUZOZGpEZXRiUnBvZVktNDc4TndjaU01V19IV19lbU54ZHhVYTNNSFBTbjMteWg5T3V2NV9pRy1GUnVqR1c4enBucEMtS2dJVkhaanNvUXlzalAtR3N2Y0xJRTMwZnd5Zk53aTZNZFhYdXZXeUVrQk9JNWZkX05IRnB1WmQ2ZzZ3OyBwcl9yZWZyZXNoX3Rva2VuPWV5SmpkSGtpT2lKS1YxUWlMQ0psYm1NaU9pSkJNalUyUjBOTklpd2lZV3huSWpvaVVsTkJMVTlCUlZBaWZRLnp4UGdmNzhEQm80OVc3cENUWVJSV0VfaWhqQVkzRjF1WXpxekhySzRoZWxPY2tVcE1HZzhKMGFnRG00WEpxbVVvbTl2NU9MaGZyNHhIY1J0ZklUZ0RkSGZhX2RMTHJKS2s4bkNPNmRKQVluUV90M3ZWNFVWWE8tTV8tWlBMZmVTeEUtQWV5MzI3MUdIZUhud3JWRVhmUXNPQ3g0SThMQkVzak8zbTBVWnF3bWswcUpjTWpkcU51eHd5ajl2cTJqeUhaTW9mNFJlOVdYd3RTbGFzZTBwRUtHM3cwNGFXWEoyX1ZqN1Y3SEhmcXA5WjZlUmJhcWl0Yi1Ra09XNHpJSk96UDFId2RKTDhFY182RUtWWVliaXJnR3dCVWF2eG53am1iYWU4RTBsYUROQmtoUnpjT2o3aGhVQXVDaXl1NnltNzI3T0RmSUFaNHh3RFVWV1pJWjc4Zy54TnFGcGR0amlTSjdEeFlHLnA1N2s2di1vRXlXd1ZIMjU5ZlFJM2xUNHRZbFFqWXowMFR2T1hTVlFkZnp5Sl9iU20xM3JmVVJ1R0k0b1l1TDhtZGsyQlA3RlgtYmRfcnlDcDRySlZEbklNajltbHpYUUxEMGpVeGdDM2N1ZlFUXzFuWTJzY2V3TG51cS1lczhpNmdCTjhQUFYzaXVtSmMwVFM4amRSSEFhVWR3RnRDa1Nvc1VWR2pNeXM5SUtranpRSnBRVU82Z3oyYzh1cmNVSXZwS0x4Vlp4UnV5N05QamxoaWZOWHJLaTViMi16YUlHQjRBVjNhTUdtTENZUEtCeE9PNnljOXZlTWRfcXZDdnJBa1laMTJDUzNkcDJ6NG8tS0VIUjgwU1ZFYlVVeDRyTHFQVmNRQXlqV0Y2SGxUcVRJdWFtYTVQakdaS0ZORlU1RmU3YVNGWm9fMmdsa0JDN3hSZ0dNaXdtRm13Q1Q1dktreHdZM21HZjlDVVdVSXBScXVzN0hjcmdiZWduNl9naWt3a0FDS2VVTjBMb3BQV0JpZW1TZmRIbnQtblA3QW1kOUJQYWVnVHV3Tk9BLUN5U2dJSWJObGF6d2tScktnbXd6RVZxTEl1S0cwUWxyMloyMWNXaGxnY2RUMXNrVW5nbmUwNk40TmJXanFzQ0l0VzNoX29vWFdrMF83WTFnU0s2dENDbEY0QWdoMlM4Z09PV29kTXBISUVrWEo5Vm85cWFaXzVzQ0twTjVma0RhY0ZQdzFiM1FjNzNqcU5zLWhqNGtRZEtNMUZkcWFUblctUlNEUjhvT0Q0Z2NQOXhER3FKQUY4bk5UV0FWSTQ1WS1jeVd3Z2lINzJ1cjJ0Vm5ES25oZE90TkUtdU8yUHFPRGxjYU5lMlZaMzcyS1liTTR0Q1EyZ0lYMVRWemNnNExrZjJhQWx5ektzS19tZlVBUUJQZk1OcU9uVmdkRGR6LVRFSkRQV3ZGMDZkQWxHSWNsM0d6VW51SHpvc240Wl9TZGwtZ0JLS3gxUExyLUJmaUlOMnVOdjZnSXNhcVhaMEpQcXNpamh5Zl81M0ljZTEtSUEwSUpaZnNzLWIxTllWejJVenlzZHhtajhqY0xMMjlGRy1mTUlDdXplNVpfU0RUNUlRcnRfRWVmT01QSlowc1hRWWlDdk1zODZMWGtaTDM4eF9vSFBBSWtINGhpWTBGdTlCRTBnc1RoYXAySFdFM3BLbFJEdHRxalJUU0JodGFYc1Y0VzNTUDNLR19ZLXBteVhHVlVzODdNWkxjb1ZUVlhDWUZ4U3dFeEFBSzFab1dzOHBIY1d2ZUlGRDFLOENPMUVSdlhLaEM4UDZVODNvODZreUt0eFAxS3NHXzhFSXRwTS1GTG9LOG1QRnNNY0h3QlpnNlFJMkNxWWoxQjVVc1ltRjlXMDlUMW45a2lFRk1HNk9wUV9XeGhzWnlyc0NxUDVzRjd0SDFCTlh2dDBjTFJQYkV0cXBuM1NZbEtWX1I0c0hBeFRKVF9BdmxxSDQzNHpUb0I3ZHRoaFNRUkVqemdfSlpaU0ZUdjBtOFZsRjB0S1JOakJDZzVoNXl1bFRMdDNLMDd4Wk5abVN4UVN0Z1czcVUxLVVvR0F0VnhuaDVjRUJOLXJnc012TDdxenFaSEdta2pHQVBtVnhhUjAtcU1BVFhkUWU4bGk2alJyUFJmRWZqQXRrTUd3TzMtVVpxbEYzMF9mV1k1cXpwSXo3czBTZ29ScmlFZndNcUEuTmhHSmRQOV9tOXVFLXlKOXpLbHR2UTsgYXdzLXdhZi10b2tlbj0zYzU3NGUyMS1lNWY3LTQxOTMtYmI4Zi1kZDk0OWQzNmIwZjM6RWdvQW5pUWtscHJnQVFBQTpsTmNTWjNzUkp0WmxQcFRLUWdSbU9PS2luSkFSWDdMd2hrMTJaVnlyeVdNMHh5ckYxR2tvQzVwK0t1WWo5SHU1Z0p1ck8vYWNocEZBTk5UU0lxbmxZcHpCTUJIS1RTMmN1VW9PZVdXeXorQ3Q1UVExM091YWtzSUZ0SVJuYUs1eUkvdjA3RVhJMUFyWDRZZ2VMRWRzVUpmWmpmMnJYeEJjR0NEei83RXA3WnBGYm83QnFuN3dJSTZwUDBGTFJBPT07IGN3cl91PTMwOTFmNjQxLTQ5MjYtNDljOS1hNTk5LThjMmM2MGRiYTc0MTsgY3dyX3M9ZXlKelpYTnphVzl1U1dRaU9pSXhaV1EwTlRKbFl5MDNaakJoTFRRMU9HTXRPRE0wTUMwMFlqUTROalE0T0RWaE5qVWlMQ0p5WldOdmNtUWlPblJ5ZFdVc0ltVjJaVzUwUTI5MWJuUWlPalEzTENKd1lXZGxJanA3SW5CaFoyVkpaQ0k2SWk5MUwweE5RekV4TVM5aWVVVlpMVlZQUmpjaUxDSnBiblJsY21GamRHbHZiaUk2TUN3aWNtVm1aWEp5WlhJaU9pSm9kSFJ3Y3pvdkwyRmpZMjkxYm5SekxtZHZiMmRzWlM1amIyMHZJaXdpY21WbVpYSnlaWEpFYjIxaGFXNGlPaUpoWTJOdmRXNTBjeTVuYjI5bmJHVXVZMjl0SWl3aWMzUmhjblFpT2pFM016ZzBOek00TWprM09EZDlmUT09", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
		        { name: "🧩Command R+", url: "https://commandrapi.xinu.ink/v1/chat/completions", key: "04iOjSYpNeG9qUnuQL7IlkPeEIr4LqVtIVwcvja8", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "🐱KIMI", url: "https://kimiapi.xinu.ink/v1/chat/completions", key: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDEwMywiaWF0IjoxNzM2OTI0MTAzLCJqdGkiOiJjdTNsbmhvbDNkYzduN2Rqcmc4MCIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY29kY2xyOWtxcTRuOGltdjEwOWciLCJzcGFjZV9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDkwIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDhnIiwiZGV2aWNlX2lkIjoiNzQ2MDAzMjA3NjI4NTIxODA0OCJ9.FgtrnPY9TqpffmIZ5RzV3vro8gFmQnrZ9GfEa0_cZOZtvgcGR2nw9u_I98VRWTZVgyncfuBTX02D6v9TFKEqOw,eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDc2OCwiaWF0IjoxNzM2OTI0NzY4LCJqdGkiOiJjdTNsc283ZnRhZWU3aDJzNGdvZyIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY3JjN3FudWJpN3NiZ2U2cDRoaDAiLCJzcGFjZV9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGdnIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGcwIiwiZGV2aWNlX2lkIjoiNzQ2MDAzNDg0NjUzOTIzMjAwOCJ9.2JxgFSuzBdGNpq7m0-bpwobtIZcvjxvMx09e3IDVi4TYEwrFCUVU1ZNL6vgU34IYpeFAjCMA_6F2VCr6a6jKyA", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐕GLM4", url: "https://glmapi.xinu.ink/v1/chat/completions", key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjM3NzRjZjE4NTk0M2EzOTUyMzY3MGYyMGQwZTZlZCIsImV4cCI6MTc0MTAxNjI0MiwibmJmIjoxNzI1NDY0MjQyLCJpYXQiOjE3MjU0NjQyNDIsImp0aSI6Ijc2YzNjOThmZjRjMzQ1YWY5NzA4NWI5N2M3MmMzNzAyIiwidWlkIjoiNjZkODdlYjJkM2IzNmZlYmU1OGEwM2ZhIiwidHlwZSI6InJlZnJlc2gifQ.Gn6lwrnMR24kWVxPrFrA3DFCpXBMpjZPT7t1Uqm-L8o,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzMxOTcyZWM3NTU0NmI0YjM2ZmMzMzUyMzk2MzA0IiwiZXhwIjoxNzQxMDE2NDY1LCJuYmYiOjE3MjU0NjQ0NjUsImlhdCI6MTcyNTQ2NDQ2NSwianRpIjoiNTI4NTg0MTg5ZGZmNDM3ZDk0YTI4ZTdhOGY3MTk0NSIsInVpZCI6IjY2NzE0NjQ4OTU1Y2I4OGVjMzA0ODE1MyIsInR5cCI6InJlZnJlc2gifQ.ah7GhAwQaZSeuQUKObsKahjcoLY5_LagTbpa25Dh3N4,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjZiOWQ0OTJlZjc0OGRjOTRjZmM3ZTgxMTU5ZWI4MSIsImV4cCI6MTc0MTAxNjU3OCwibmJmIjoxNzI1NDY0NTc4LCJpYXQiOjE3MjU0NjQ1NzgsImp0aSI6Ijk2MWRhMjI4NjBkNDQ0ODJhMjIxNjFlZjBhYTFlNzkyIiwidWlkIjoiNjY3NDI3NGE0ZWZkYjg1MTJkYzVlNzgyIiwidHlwZSI6InJlZnJlc2gifQ.DkA_lj335j43UST5DkS1HtNrEf5KkDXQL9qtUanypYQ", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐣QWen", url: "https://qwenapi.xinu.ink/v1/chat/completions", key: "tMUHEnF6AFvL_vshhJXJycrhAXcLIsHz3AbTWbObcU_WTPf9ywfyhkEZsQi1tre*0,UZ8XOiavN_biK2RJJ430wreUU*tntMAHELF6sFvJ_vuHhxSXzkeWxmrjHBGEX8th0,7a5tLvNX4OTOvyMQRbNyLzWPGPAanQNdXre0U*tntMAHELF6sFvJ_vTEha9PVIkA0", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍯META", url: "https://metaapi.xinu.ink/v1/chat/completions", key: "6616d1b3d0fd75295d361294-55a4daa2b53943d79859f55b9a234d94,66d8834bb9cd10e507586a9f-29976feb25ca461cb21e782da888f31d,667427c5d4a1e716fd326ed0-c6550ea4655146238797fc8fa7e9f223", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐚神奇海螺", url: "https://abcapi.xinu.ink/v1/chat/completions", key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDAzODExNzMsInVzZXIiOnsiaWQiOiIyODc3Njk5NDU5MTk3NjI0NDEiLCJuYW1lIjoi5bCP6J665bi9MjQ0MSIsImF2YXRhciI6Imh0dHBzOi8vY2RuLnlpbmdzaGktYWkuY29tL3Byb2QvdXNlcl9hdmF0YXIvMTcwNjI2NzU0NDM4OTgyMDgwMS0xNzMxOTQ1NzA2Njg5NjU4OTZvdmVyc2l6ZS5wbmciLCJkZXZpY2VJRCI6IjMzNTgzMzMxMjc2MTA5NDE0NiIsImlzQW5vbnltb3VzIjpmYWxzZX19.KyC_8w6VRQel8jEy3i2lcZfsWNnFVRxjQ9EEMXgRkOA,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDAzODEyNjYsInVzZXIiOnsiaWQiOiIyNDMwNjkyMjcwMTkyMDI1NjIiLCJuYW1lIjoi5bCP6J665bi9MjU2MiIsImF2YXRhciI6Imh0dHBzOi8vY2RuLnlpbmdzaGktYWkuY29tL3Byb2QvdXNlcl9hdmF0YXIvMTcwNjI2NzcxMTI4Mjc3MDg3Mi0xNzMxOTQ1NzA2Njg5NjU4OTZvdmVyc2l6ZS5wbmciLCJkZXZpY2VJRCI6IjMzNTgzMzMxMjc2MTA5NDE0NiIsImlzQW5vbnltb3VzIjpmYWxzZX19.ZoNBD5r1J0YFQ-BsedkK0OUExGsnMKM8SbFIpNMBf0U", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤯DeepSeek", url: "https://deepapi.xinu.ink/v1/chat/completions", key: "u2mmirLMWc3XyKGm6qAAe96Rw1nOnUUC9hUadUIJ1CgxmBIu9mucXWvRPgmx3pTC", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐰Step", url: "https://stepapi.xinu.ink/v1/chat/completions", key: "ea06d727735d4985fc0e3a5fa3b653ac234613d4@eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3RpdmF0ZWQiOnRydWUsImFnZSI6MSwiYmFuZWQiOmZhbHNlLCJjcmVhdGVfYXQiOjE3MjU0NjYwODMsImV4cCI6MTcyNTQ2Nzg4MywibW9kZSI6Miwib2FzaXNfaWQiOjExNDI3MjM2ODA4NzU0NzkwNCwidmVyc2lvbiI6Mn0.TkPsjicOXRevQcNPoaiB9Q3ICLfyOXYqtDrZtLA24Ko...eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOjEwMjAwLCJkZXZpY2VfaWQiOiJlYTA2ZDcyNzczNWQ0OTg1ZmMwZTNhNWZhM2I2NTNhYzIzNDYxM2Q0IiwiZXhwIjoxNzI4MDU4MDgzLCJvYXNpc19pZCI6MTE0MjcyMzY4MDg3NTQ3OTA0LCJwbGF0Zm9ybSI6IndlYiIsInZlcnNpb24iOjJ9.YHp_GUdm5RiDt9sepfHJti9fKRjIltSDwMW3hFnZbMU,2bfd0e7a02dd912fdc8072b5fce211aa36156eb6@eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3RpdmF0ZWQiOnRydWUsImFnZSI6MSwiYmFuZWQiOmZhbHNlLCJjcmVhdGVfYXQiOjE3MjU0NjYzMTQsImV4cCI6MTcyNTQ2ODExNCwibW9kZSI6Miwib2FzaXNfaWQiOjE0MjY2MDc0MDk5MjY2MzU1MiwidmVyc2lvbiI6Mn0.6bH_02mGpahqLw31iU-_NvSJBL4csV6lASWRZr9P_XQ...eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOjEwMjAwLCJkZXZpY2VfaWQiOiIyYmZkMGU3YTAyZGQ5MTJmZGM4MDcyYjVmY2UyMTFhYTM2MTU2ZWI2IiwiZXhwIjoxNzI4MDU4MzE0LCJvYXNpc19pZCI6MTQyNjYwNzQwOTkyNjYzNTUyLCJwbGF0Zm9ybSI6IndlYiIsInZlcnNpb24iOjJ9.NsFm0uUEYsZ_V_rPJnZaHwwLD8jRVJCpT4oRy_56ZUs", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "✨Spark ", url: "https://sparkapi.xinu.ink/v1/chat/completions", key: "d0a840db-9ef1-4f45-872a-74f206bc46e2,74acf343-71e7-45ad-98ea-5ea9462edcfa", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "☯️Hunyuan", url: "https://open.hunyuan.tencent.com/openapi/v1/agent/chat/completions", key: "RQbLhwKkdnDACwWwo3BqFoPn4Wh7AKwJ", assistantId: "IzIEc6YhQz80", userId: "", requestType: "yuanqi", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🫘Doubao", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7383976691804733452", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "💜紫东太初", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7383978669951746098", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "🌾01ai", url: "https://api.siliconflow.cn/v1/chat/completions", model:"01-ai/Yi-1.5-9B-Chat-16K", key: "sk-ykuxdhywwcsxeccruqrnpqfffaolutvekszwoeqzvnhrakqd", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "📖InternLM", url: "https://api.siliconflow.cn/v1/chat/completions", model:"internlm/internlm2_5-7b-chat", key: "sk-qhzhsobdkzujpeoahiuhjjvdpmihwvtwwxbmtozejuxhnujn", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🌹Rose", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "sophosympatheia/rogue-rose-103b-v0.2:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🌵GPT-3.5T", url: "https://api.chatanywhere.tech/v1/chat/completions", model: "gpt-3.5-turbo", key: "sk-IglcsvDzHFBbxvULdYPplbgWsr8hCzz4tNYEg7fmvumvOX1C", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true }, 
                        { name: "🧐Marco-o1", url: "https://api.siliconflow.cn/v1/chat/completions", model:"AIDC-AI/Marco-o1", key: "sk-qhzhsobdkzujpeoahiuhjjvdpmihwvtwwxbmtozejuxhnujn", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "⭐️Genspark", url: "https://gs.aytsao.cn/v1/chat/completions", model: "d", key: "sk-genspark2api", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "👾文心一言", url: "https://cn.apihz.cn/api/ai/wxspeed.php", key: "fb68a47f6f2ffbaf70d15f7b5f3bd4bb", userId: "10002299", requestType: "yiyan", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "👾文心一言T", url: "https://api.52vmy.cn/api/chat/yiyan", key: "", requestType: "link", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "💦Baichuan4", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7383939253954592787", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "🌿Chato", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7383943057160339465", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🌘Moonshot", url: "https://api.coze.cn/open_api/v2/chat", model: "kimi",key: "pat_pVUJYq9hbsnGt3RK3W4LF5iczeqO5wapztWSD1vLbZthFniSJErQ2ByMlqxsOhwL", botId: "7385025532196945974", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "😵‍💫Gemini", url: "https://thinkgeminiapi.xinu.ink/v1/chat/completions", model: "gemini-2.0-flash-exp", key: "AIzaSyCZCYbip95Eb9L9LJHpv8F2jlqGlVBe_zQ", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "😵‍💫GeminiPro", url: "https://thinkgeminiapi.xinu.ink/v1/chat/completions", model: "gemini-2.0-pro-exp", key: "AIzaSyBHe8eq5VgKf99GtknwPkic54s4F5tYDuY", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "😵‍💫GeminiThink", url: "https://thinkgeminiapi.xinu.ink/v1/chat/completions", model: "gemini-2.0-flash-thinking-exp", key: "AIzaSyDRYQR37s5rwzWqkAHXgEi-aJvWgb3bpH4", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "💺Phi3.5", url: "https://models.inference.ai.azure.com/chat/completions", key: "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", model: "Phi-3.5-MoE-instruct", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "💪🏻Bing（备用）", url: "https://bingapi.xinu.ink/api/v1/chat/completions", key: "", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "🪄Llama3", url: "https://llama3api.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: true }, 
                        { name: "🐳DeepseekV3", url: "https://gs.aytsao.cn/v1/chat/completions", model: "deep-seek-v3", key: "sk-genspark2api", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐋🤔DeepseekR1", url: "https://api.groq.com/openai/v1/chat/completions", key: "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", model: "deepseek-r1-distill-llama-70b", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐋🤔DeepseekR1(2)", url: "https://models.inference.ai.azure.com/chat/completions", key: "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", model: "DeepSeek-R1", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐋🤔DeepseekR1(3)", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "deepseek/deepseek-r1:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐋🦙DeepseekR1", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "deepseek/deepseek-r1:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🐋🍯DeepseekR1", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "deepseek/deepseek-r1:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🔢🐋DeepseekMath", url: "https://lmc-cloudflarea-64.deno.dev", key: "", model: "@cf/deepseek-ai/deepseek-math-7b-instruct", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🌟Starling", url: "https://lmc-cloudflarea-64.deno.dev", key: "", model: "@hf/nexusflow/starling-lm-7b-beta", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🦛Hermes", url: "https://lmc-cloudflarea-64.deno.dev", key: "", model: "@hf/nousresearch/hermes-2-pro-mistral-7b", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🥯OpenChat", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "openchat/openchat-7b:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🌸Starchat", url: "https://lmc-huggingface-16-6tk83hdhya27.deno.dev/v1/chat/completions", key: "", model: "HuggingFaceH4/starchat2-15b-v0.1", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🦙Llama3.3", url: "https://api.deepinfra.com/v1/openai/chat/completions", key: "", model: "meta-llama/Llama-3.3-70B-Instruct", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍣Phi4", url: "https://api.deepinfra.com/v1/openai/chat/completions", key: "", model: "microsoft/phi-4", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🫐SkyT1", url: "https://api.deepinfra.com/v1/openai/chat/completions", key: "", model: "NovaSky-AI/Sky-T1-32B-Preview", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍿OvO", url: "https://api.deepinfra.com/v1/openai/chat/completions", key: "", model: "Qwen/QwQ-32B-Preview", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🎃WizardLM", url: "https://api.deepinfra.com/v1/openai/chat/completions", key: "", model: "microsoft/WizardLM-2-8x22B", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
		    { name: "🥨QwQ", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "qwen/qwen-2-7b-instruct:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍨Gemma ", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "google/gemma-2-9b-it:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍩LearnLM", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "google/learnlm-1.5-pro-experimental:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍱MythonMax", url: "https://openrouter.ai/api/v1/chat/completions", key: "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", model: "gryphe/mythomax-l2-13b:free", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🍭Jina ", url: "https://api.chat.jina.ai/v1/chat/completions", key: "gZ3lwTctKH0xGo16Av0z:67b70f016052e6fabccacd2e82f4b29561e833566ec675c71e68db22ea11596e", model: "Jina", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "👑GPT-4（备用）", url: "https://gpt4api.xinu.ink/v1/chat/completions", key: "pat_CQTaggTGFD6vG9Q4iZ5k5GKoWlYbo8KxVGz0VDgrjYj1bXaiPYypmjbv1Ijtnoqi", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "💎GPT-4o（备用）", url: "https://4oapi.xinu.ink/v1/chat/completions", key: "pat_3xiUrFuCvi4fpSwF5EtJZSm3Wh0j2jDBxtdOTXXT534hJqSRWZBZlubivaK71giT", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "💫GPT-3.5", url: "https://35api.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "🌟文章链接总结", url: "https://open.hunyuan.tencent.com/openapi/v1/agent/chat/completions", key: "k9GLQwTIt1FDX33aKobKx3m1oeckbs3q", assistantId: "hAh27qktA7Sm", userId: "", requestType: "yuanqi", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "🪗低配乐队", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7384040353152188431", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "✍🏻超长写手", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7384412606246944806", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
						{ name: "🎨聚合画师", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7384054985380331574", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
						{ name: "🎶Suno", url: "https://sunoapi.xinu.ink/v1/chat/completions", key: "", model: "kimi", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },								
						{ name: "🧠思维导图大师", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7384247641476956187", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "📊统计图表生成", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7384268583939473446", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "⏬视频解析", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7383885987832692790", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "📎流程图生成机", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_83SPfqVW05UCt4WYvgJlU9W3TgClSDDzqkvNzXjV2q2srbW2DFSwjELTz4SEknQc", botId: "7384795713571504164", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
		    			{ name: "🖌️长文润色", url: "https://api.coze.cn/open_api/v2/chat", key: "pat_uqcc1qS1VJVgu8TrV4QFoh931DDa25Z03cgIhWQOeywPFnFQ0ioy56ajtQ2jy2Rm", botId: "7385008465992777779", userId: "29032201862555", requestType: "doubao", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "🦜GPT4o", url: "https://models.inference.ai.azure.com/chat/completions", model:"gpt-4o", key: "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", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                         { name: "🤓Claude3.5sonnet2", url: "https://api.typegpt.net", model: "claude-3-5-sonnet-20240620", key: "sk-ksJF68A1GyV1rz9KoUkj3HSSnIyg6zIl9AwFVQgfRMWKTGMd", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
            ],
            advancedModels: [
                        { name: "🤔😵‍💫Gemini思考", url: "https://thinkgeminiapi.xinu.ink/v1/chat/completions", model: "gemini-2.0-flash-thinking-exp-01-21", key: "AIzaSyCZCYbip95Eb9L9LJHpv8F2jlqGlVBe_zQ", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
						{ name: "🤔🐕GLM4思考", url: "https://glmapi.xinu.ink/v1/chat/completions", model:"glm-4-think" , key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjM3NzRjZjE4NTk0M2EzOTUyMzY3MGYyMGQwZTZlZCIsImV4cCI6MTc0MTAxNjI0MiwibmJmIjoxNzI1NDY0MjQyLCJpYXQiOjE3MjU0NjQyNDIsImp0aSI6Ijc2YzNjOThmZjRjMzQ1YWY5NzA4NWI5N2M3MmMzNzAyIiwidWlkIjoiNjZkODdlYjJkM2IzNmZlYmU1OGEwM2ZhIiwidHlwZSI6InJlZnJlc2gifQ.Gn6lwrnMR24kWVxPrFrA3DFCpXBMpjZPT7t1Uqm-L8o,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMzMxOTcyZWM3NTU0NmI0YjM2ZmMzMzUyMzk2MzA0IiwiZXhwIjoxNzQxMDE2NDY1LCJuYmYiOjE3MjU0NjQ0NjUsImlhdCI6MTcyNTQ2NDQ2NSwianRpIjoiNTI4NTg0MTg5ZGZmNDM3ZDk0YTI4ZTdhOGY3MTk0NSIsInVpZCI6IjY2NzE0NjQ4OTU1Y2I4OGVjMzA0ODE1MyIsInR5cCI6InJlZnJlc2gifQ.ah7GhAwQaZSeuQUKObsKahjcoLY5_LagTbpa25Dh3N4,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjZiOWQ0OTJlZjc0OGRjOTRjZmM3ZTgxMTU5ZWI4MSIsImV4cCI6MTc0MTAxNjU3OCwibmJmIjoxNzI1NDY0NTc4LCJpYXQiOjE3MjU0NjQ1NzgsImp0aSI6Ijk2MWRhMjI4NjBkNDQ0ODJhMjIxNjFlZjBhYTFlNzkyIiwidWlkIjoiNjY3NDI3NGE0ZWZkYjg1MTJkYzVlNzgyIiwidHlwZSI6InJlZnJlc2gifQ.DkA_lj335j43UST5DkS1HtNrEf5KkDXQL9qtUanypYQ", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤔🍯META", url: "https://metaapi.xinu.ink/v1/chat/completions", model:"research" , key: "6616d1b3d0fd75295d361294-55a4daa2b53943d79859f55b9a234d94,66d8834bb9cd10e507586a9f-29976feb25ca461cb21e782da888f31d,667427c5d4a1e716fd326ed0-c6550ea4655146238797fc8fa7e9f223", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤔💎o1mini", url: "https://duck2api.com/v1/chat/completions", model:"free-o1-mini", key: "sk-zHogRqBTTc8SfyKfF9EiVNhGqBhMXEQCHSG2lZBPMsg1T1ck", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🔢🐋DeepseekMath", url: "https://lmc-cloudflarea-64.deno.dev", key: "", model: "@cf/deepseek-ai/deepseek-math-7b-instruct", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🧐Marco-o1", url: "https://api.siliconflow.cn/v1/chat/completions", model:"AIDC-AI/Marco-o1", key: "sk-ykuxdhywwcsxeccruqrnpqfffaolutvekszwoeqzvnhrakqd", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤔🐱KIMI思考", url: "https://kimiapi.xinu.ink/v1/chat/completions", model:"kimi-k1" , key: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDEwMywiaWF0IjoxNzM2OTI0MTAzLCJqdGkiOiJjdTNsbmhvbDNkYzduN2Rqcmc4MCIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY29kY2xyOWtxcTRuOGltdjEwOWciLCJzcGFjZV9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDhnIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDhnIiwiZGV2aWNlX2lkIjoiNzQ2MDAzMjA3NjI4NTIxODA0OCJ9.FgtrnPY9TqpffmIZ5RzV3vro8gFmQnrZ9GfEa0_cZOZtvgcGR2nw9u_I98VRWTZVgyncfuBTX02D6v9TFKEqOw,eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDc2OCwiaWF0IjoxNzM2OTI0NzY4LCJqdGkiOiJjdTNsc283ZnRhZWU3aDJzNGdvZyIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY3JjN3FudWJpN3NiZ2U2cDRoaDAiLCJzcGFjZV9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGdnIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGcwIiwiZGV2aWNlX2lkIjoiNzQ2MDAzNDg0NjUzOTIzMjAwOCJ9.2JxgFSuzBdGNpq7m0-bpwobtIZcvjxvMx09e3IDVi4TYEwrFCUVU1ZNL6vgU34IYpeFAjCMA_6F2VCr6a6jKyA", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🔍🐱KIMI搜索", url: "https://kimiapi.xinu.ink/v1/chat/completions", model:"kimi-search" , key: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDEwMywiaWF0IjoxNzM2OTI0MTAzLCJqdGkiOiJjdTNsbmhvbDNkYzduN2Rqcmc4MCIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY29kY2xyOWtxcTRuOGltdjEwOWciLCJzcGFjZV9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDhnIiwiZGV2aWNlX2lkIjoiNzQ2MDAzMjA3NjI4NTIxODA0OCJ9.FgtrnPY9TqpffmIZ5RzV3vro8gFmQnrZ9GfEa0_cZOZtvgcGR2nw9u_I98VRWTZVgyncfuBTX02D6v9TFKEqOw,eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDc2OCwiaWF0IjoxNzM2OTI0NzY4LCJqdGkiOiJjdTNsc283ZnRhZWU3aDJzNGdvZyIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY3JjN3FudWJpN3NiZ2U2cDRoaDAiLCJzcGFjZV9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGdnIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGcwIiwiZGV2aWNlX2lkIjoiNzQ2MDAzNDg0NjUzOTIzMjAwOCJ9.2JxgFSuzBdGNpq7m0-bpwobtIZcvjxvMx09e3IDVi4TYEwrFCUVU1ZNL6vgU34IYpeFAjCMA_6F2VCr6a6jKyA", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🤔🐋DeepseekR1", url: "https://api.groq.com/openai/v1/chat/completions", key: "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", model: "deepseek-r1-distill-llama-70b", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: true },
                        { name: "🔢🐱KIMI数学", url: "https://kimiapi.xinu.ink/v1/chat/completions", model:"kimi-math" , key: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDEwMywiaWF0IjoxNzM2OTI0MTAzLCJqdGkiOiJjdTNsbmhvbDNkYzduN2Rqcmc4MCIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY29kY2xyOWtxcTRuOGltdjEwOWciLCJzcGFjZV9pZCI6ImNvZGNscjlrcXE0bjhpbXYxMDhnIiwiZGV2aWNlX2lkIjoiNzQ2MDAzMjA3NjI4NTIxODA0OCJ9.FgtrnPY9TqpffmIZ5RzV3vro8gFmQnrZ9GfEa0_cZOZtvgcGR2nw9u_I98VRWTZVgyncfuBTX02D6v9TFKEqOw,eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLWNlbnRlciIsImV4cCI6MTc0NDcwMDc2OCwiaWF0IjoxNzM2OTI0NzY4LCJqdGkiOiJjdTNsc283ZnRhZWU3aDJzNGdvZyIsInR5cCI6InJlZnJlc2giLCJhcHBfaWQiOiJraW1pIiwic3ViIjoiY3JjN3FudWJpN3NiZ2U2cDRoaDAiLCJzcGFjZV9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGdnIiwiYWJzdHJhY3RfdXNlcl9pZCI6ImNyYzdxbnViaTdzYmdlNnA0aGcwIiwiZGV2aWNlX2lkIjoiNzQ2MDAzNDg0NjUzOTIzMjAwOCJ9.2JxgFSuzBdGNpq7m0-bpwobtIZcvjxvMx09e3IDVi4TYEwrFCUVU1ZNL6vgU34IYpeFAjCMA_6F2VCr6a6jKyA", requestType: "type1", response: '', responseHtml: '', loading: false, error: null, selected: false },
                        { name: "👨‍💻🐋DeepseekCoder", url: "https://lmc-cloudflarea-64.deno.dev", key: "", model: "@hf/thebloke/deepseek-coder-6.7b-base-awq", requestType: "github", response: '', responseHtml: '', loading: false, error: null, selected: false },
            ],
            chatHistory: JSON.parse(localStorage.getItem('chatHistory')) || [],
            sessionToDelete: null,
            searchKeyword: '',
            selectedImage: null,
            imagePreview: null,
            settings: {
                fontSize: 'medium',
                enableNotifications: true,
                autoScroll: true,
                expandMessages: false,
                copyMarkdown: false,
                showElevator: true,
                showContentSummary: true,
                contentSummaryModel: '🌘Moonshot',
                autoSummaryThreshold: 18,
                enableAutoSummary: true,
                copyLatex: false,
                themePreset: 'default',
                primaryColor: '#3f51b5',
                accentColor: '#ff4081',
                headerColor: '#007bff',
                customTheme: null
            },
            selectedFile: null,
            isSelectMode: false,
            sortOrder: 'newest',
            currentSessionId: null,
            deleteConfirmMessage: '',
            confirmDialog: null,
            currentBubbleIndex: -1, // 当前聚焦的气泡索引
            currentConversationId: null, // 新增：当前多轮对话的 ID
            activeModel: null, // 新增：当前活跃的模型
            isAllSelected: false,
            defaultModels: [
                // 复制一份默认的模型配置
                { name: "🎐GPT-4o（128k）", url: "https://gpt4o128.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: false }, 
                { name: "💎GPT-4o", url: "https://gpt4oapi.xinu.ink/v1/chat/completions", key: "sk-deanxv-cdp", requestType: "gtp", response: '', responseHtml: '', loading: false, error: null, selected: true },
                // ... 其他默认模型配置 ...
            ],
            tempModelSelection: [], // 用于临时存储模型选择状态
            exportFormat: 'txt',
            exportWithMarkdown: false,
            sessionsToExport: [], // 存储要导出的会话
            isGeneratingSummary: false,
            summaryPrompt: `请你作为一个专业的内容分析专家，帮我总结和分析下面的对话内容。
要求：
1. 如果是问答题，请分析所有模型的答案，找出共识点和分歧点
2. 如果是选择题，请统计各个选项被选择的次数，按照出现频率从高到低排序
3. 如果是填空题，请列出所有被提到的答案，并标注提到的次数
4. 总结时要客观公正，不要偏向任何一个模型
5. 如果发现明显错误的答案，请特别标注出来
6. 最后给出一个综合建议的答案
特别注意 务必严格遵守！在提到模型名称时使用以下格式：
<model-link id="MODEL_NAME">模型名称👆🏻</model-link>

例如：<model-link id="🌘Moonshot">🌘Moonshot👆🏻</model-link>认为...

请确保每个模型名称都使用这种格式
以下是需要分析的内容：`,
            activeTab: localStorage.getItem('activeTab') || 'basic', // 从本地存储加载上次的标签页,默认为 basic
            basicAllSelected: false,
            advancedAllSelected: false,
            presetThemes: {
                default: {
                    primary: '#3f51b5',
                    accent: '#ff4081',
                    header: '#007bff'
                },
                ocean: {
                    primary: '#006064',
                    accent: '#00acc1',
                    header: '#004d66'
                },
                forest: {
                    primary: '#2e7d32',
                    accent: '#4caf50',
                    header: '#1b5e20'
                },
                sunset: {
                    primary: '#e65100',
                    accent: '#ff9800',
                    header: '#bf360c'
                },
                lavender: {
                    primary: '#6a1b9a',
                    accent: '#9c27b0',
                    header: '#4a148c'
                }
            },
            savedThemes: [],
            newThemeName: '',
            saveThemeDialog: null,
            themeLoaded: false,
            settingsLoaded: false,
            db: null, // 添加数据库引用
            themeImportInput: '', // 用于存储用户输入的主题链接
            isAppMounted: false, // 添加标记
        };
    },
    computed: {
        filteredChatHistory() {
            if (!this.searchKeyword) {
                return [...this.chatHistory].reverse();
            }
            return [...this.chatHistory]
                .reverse()
                .filter(session => 
                    session.title.includes(this.searchKeyword) ||
                    new Date(session.lastUpdated).toLocaleString().includes(this.searchKeyword)
                );
        },
    },

    created() {
        // 在 created 钩子中初始化基本数据
        try {
            // 尝试加载保存的主题
            const savedThemes = localStorage.getItem('savedThemes');
            if (savedThemes) {
                this.savedThemes = JSON.parse(savedThemes);
            }
        } catch (error) {
            console.error('加载保存的主题失败:', error);
        }
    },

    mounted() {
        console.log('Vue app mounting...');
        try {
            // 1. 先应用默认设置
            this.applyDefaultSettings();

            // 2. 尝试加载保存的设置
            const savedSettings = localStorage.getItem('chatSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                Object.assign(this.settings, settings);
                
                if (settings.darkMode !== undefined) {
                    this.darkMode = settings.darkMode;
                }
            }

            // 3. 静默应用所有设置
            this.applySettings(true);

            // 4. 初始化其他功能
            this.initChat();
            this.loadSavedData();

            // 加载保存的模型配置和标签页设置
            const savedAdvancedModels = localStorage.getItem('savedAdvancedModels');
            if (savedAdvancedModels) {
                this.advancedModels = JSON.parse(savedAdvancedModels);
            }

            // 加载保存的标签页设置
            const savedTab = localStorage.getItem('activeTab');
            if (savedTab) {
                this.activeTab = savedTab;
            }

            // 5. 延迟检查主题参数
            this.$nextTick(() => {
                setTimeout(() => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const themeParam = urlParams.get('theme');
                    
                    if (themeParam) {
                        console.log('Found theme parameter, attempting to handle...');
                        this.handleSharedTheme(themeParam);
                    }
                }, 2000); // 给足够的时间让 MDUI 加载
            });

        } catch (error) {
            console.error('初始化失败:', error);
        }
    },
    methods: {
        openDeleteConfirmDialog(session) {
            this.sessionToDelete = session;
            if (!this.confirmDialog) {
                this.confirmDialog = new mdui.Dialog('#confirm-delete-dialog', {
                    history: false // 禁用历史记录，防止与历史记录对话框冲突
                });
            }
            this.$nextTick(() => {
                this.confirmDialog.open();
            });
        },

        closeDeleteConfirmDialog() {
            if (this.confirmDialog) {
                this.confirmDialog.close();
            }
            this.sessionToDelete = null;
        },

        confirmDelete() {
            if (this.sessionToDelete) {
                const index = this.chatHistory.findIndex(s => s.id === this.sessionToDelete.id);
                if (index !== -1) {
                    this.chatHistory.splice(index, 1);
                    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
                    this.showNotification('会话已删除');
                }
            }
            this.closeDeleteConfirmDialog();
        },
        initChat() {
            this.messages = [];
            this.scrollToBottom();
        },
        getResponses() {
            if (!this.question.trim() && !this.selectedImage && !this.selectedFile) return;

            // 根据保存的 activeTab 决定使用哪组模型
            const activeModels = localStorage.getItem('activeTab') === 'advanced' ? 
                this.advancedModels : this.models;
            
            let content = '';
            let rawContent = '';

            // 构建消息内容
            if (this.selectedImage) {
                // 处理图片消息
                content = `<img src="${this.selectedImage}" style="max-width: 200px; margin-bottom: 10px;"><br>${this.question}`;
                rawContent = this.question;
            } else if (this.selectedFile) {
                // 处理文件消息
                const getReadableFileSize = (bytes) => {
                    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                    if (bytes === 0) return '0 Byte';
                    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
                    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
                };

                // 构建文件信息
                const fileInfo = `[文件信息]\n文件名: ${this.selectedFile.name}\n文件类型: ${this.selectedFile.type}\n文件大小: ${getReadableFileSize(this.selectedFile.size)}`;
                
                // 如果有文本内容且是文本文件，添加内容预览
                let fileContent = '';
                if (this.selectedFile.content) {
                    const maxLength = 1000;
                    const truncatedContent = this.selectedFile.content.length > maxLength ? 
                        this.selectedFile.content.substring(0, maxLength) + '...(内容已截断)' : 
                        this.selectedFile.content;
                    fileContent = `\n\n内容预览:\n${truncatedContent}`;
                }

                // 组合用户描述和文件信息
                content = this.question ? 
                    `${fileInfo}\n\n用户描述: ${this.question}${fileContent}` : 
                    `${fileInfo}${fileContent}`;
                rawContent = content;
            } else {
                // 普通文本消息
                content = this.question;
                rawContent = this.question;
            }

            const userMessage = {
                id: Date.now(),
                content: content,
                rawContent: rawContent,
                type: 'user-bubble',
                hasImage: !!this.selectedImage,
                hasFile: !!this.selectedFile
            };
            
            this.messages.push(userMessage);
            this.scrollToBottom();
            this.saveCurrentChat();

            // 只向支持图片和文件的模型发送请求
            activeModels.forEach(model => {
                if (model.selected && (!this.activeModel || model.name === this.activeModel)) {
                    if ((this.selectedImage || this.selectedFile) && model.requestType !== 'type1') {
                        return; // 跳过不支持图片和文件的模型
                    }
                    
                    model.loading = true;
                    if (model.requestType === "type1") {
                        this.sendRequestType1WithImage(model);
                    } else if (!this.selectedImage && !this.selectedFile) {
                        // 其他类型的请求只处理纯文本消息
                        if (model.requestType === "doubao") {
                            this.sendRequestDoubao(model);
                        } else if (model.requestType === "gtp") {
                            this.sendRequestGTP(model);
                        } else if (model.requestType === "bing") {
                            this.sendRequestBing(model);
                        } else if (model.requestType === "bingbl") {
                            this.sendRequestBingbl(model);
                        } else if (model.requestType === "github") {
                            this.sendRequestGithub(model);
                        } else if (model.requestType === "bingpr") {
                            this.sendRequestBingpr(model);
                        } else if (model.requestType === "yuanqi") {
                            this.sendRequestYuanqi(model);
                        } else if (model.requestType === "yiyan") {
                            this.sendRequestYiyan(model);
                        } else if (model.requestType === "link") {
                            this.sendRequestLink(model);
                        }
                    }
                }
            });

            // 清理状态
            this.question = '';
            this.selectedImage = null;
            this.imagePreview = null;
            this.selectedFile = null;
        },
        sendRequestType1WithImage(model) {
            let messages = [];

            if (this.activeModel === model.name) {
                // 只有在多轮对话模式下才带上聊天记录
                messages = this.messages
                    .filter(msg => msg.model === model.name || msg.type === 'user-bubble')
                    .map(msg => ({
                        role: msg.type === 'user-bubble' ? 'user' : 'assistant',
                        content: msg.rawContent
                    }));
            }

            if (this.selectedImage) {
                const imageData = this.selectedImage.split(',')[1];
                messages.push({
                    role: 'user',
                    content: [
                        {
                            type: 'image_url',
                            image_url: {
                                url: this.selectedImage,
                                detail: 'auto'
                            }
                        },
                        {
                            type: 'text',
                            text: this.question
                        }
                    ]
                });
            } else {
                messages.push({
                    role: 'user',
                    content: this.question
                });
            }

            // 修改请求体构建逻辑，为 Groq API 使用不同的格式
            let requestBody;
            if (model.url.includes('groq')) {
                // Groq API 的请求格式
                requestBody = {
                    model: model.model || 'deepseek-r1-distill-llama-70b',
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 4096
                };
            } else {
                // 原有的 type1 请求格式
                requestBody = {
                    model: model.model || 'kimi',
                    messages: messages,
                    stream: false,
                    use_search: false,
                    temperature: 0.7
                };
            }

            console.log('Sending request to', model.name, 'with body:', JSON.stringify(requestBody, null, 2));

            fetch(model.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${model.key}`,
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache',
                },
                body: JSON.stringify(requestBody),
                credentials: 'omit'
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Response from', model.name, ':', data);
                model.loading = false;
                if (data.choices && data.choices.length > 0) {
                    const messageContent = data.choices[0].message.content;
                    let responseContent = '';
                    
                    if (typeof messageContent === 'string') {
                        responseContent = messageContent;
                    } else if (Array.isArray(messageContent)) {
                        responseContent = messageContent
                            .filter(item => item.type === 'text')
                            .map(item => item.text)
                            .join('\n');
                    } else if (typeof messageContent === 'object' && messageContent.text) {
                        responseContent = messageContent.text;
                    } else if (typeof messageContent === 'object') {
                        responseContent = JSON.stringify(messageContent);
                    }

                    if (responseContent) {
                        const aiResponse = {
                            id: Date.now() + Math.random(),
                            content: this.processMessageContent(responseContent),  // 改这里
                            rawContent: responseContent,
                            type: 'ai-bubble',
                            model: model.name,
                            emoji: model.name.match(/^[^\w\s]/) ? model.name.match(/^[^\w\s]/)[0] : '🤖' // 提取模型名称中的第一个emoji或使用默认emoji
                        };
                        this.messages.push(aiResponse);
                        this.scrollToBottom();
                        this.saveCurrentChat();
                        this.saveChatHistory();

                        this.showNotification(`${model.name} 已响应`);
                        
                        // 添加这行来检查是否需要触发自动总结
                        this.checkAutoSummary(aiResponse);
                    } else {
                        throw new Error('Empty response content');
                    }
                } else {
                    throw new Error('No valid response content');
                }
            })
            .catch(error => {
                model.loading = false;
                model.error = error.message;
                console.error('Error from', model.name, ':', error);
                
                if (!this.isMobileDevice()) {
                    this.showNotification(`${model.name} 处理请求时出错: ${error.message}`, true);
                }
            });
        },
		sendRequestBing(model) {
		            fetch(model.url, {
		                method: 'POST',
		                headers: {
		                    'Content-Type': 'application/json',
		                    'Authorization': `Bearer ${model.key}`,
		                },
		                body: JSON.stringify({
		                    model: "Creative-g4t",
		                    messages: [{ role: 'user', content: this.question }],
		                    stream: false,
		                }),
		            })
		            .then(response => response.json())
		            .then(data => {
		                model.loading = false;
		                if (data.choices && data.choices.length > 0) {
		                    const aiResponse = {
		                        id: Date.now() + Math.random(),
		                        content: this.processMessageContent(data.choices[0].message.content),  // 改这里
		                        rawContent: data.choices[0].message.content,
		                        type: 'ai-bubble',
		                        model: model.name,
		                    };
		                    this.messages.push(aiResponse);
		                    this.scrollToBottom();
		                    this.saveCurrentChat();
		                    this.saveChatHistory();
		                }
		            })
		            .catch(error => {
		                model.loading = false;
		                model.error = error.message;
		                console.error('Error:', error);
		            });
		        },
				sendRequestBingbl(model) {
				            fetch(model.url, {
				                method: 'POST',
				                headers: {
				                    'Content-Type': 'application/json',
				                    'Authorization': `Bearer ${model.key}`,
				                },
				                body: JSON.stringify({
				                    model: "Balanced-g4t",
				                    messages: [{ role: 'user', content: this.question }],
				                    stream: false,
				                }),
				            })
				            .then(response => response.json())
				            .then(data => {
				                model.loading = false;
				                if (data.choices && data.choices.length > 0) {
				                    const aiResponse = {
				                        id: Date.now() + Math.random(),
				                        content: this.processMessageContent(data.choices[0].message.content),  // 改这里
				                        rawContent: data.choices[0].message.content,
				                        type: 'ai-bubble',
				                        model: model.name,
				                    };
				                    this.messages.push(aiResponse);
				                    this.scrollToBottom();
				                    this.saveCurrentChat();
				                    this.saveChatHistory();
				                }
				            })
				            .catch(error => {
				                model.loading = false;
				                model.error = error.message;
				                console.error('Error:', error);
				            });
				        },
						sendRequestBingpr(model) {
						            fetch(model.url, {
						                method: 'POST',
						                headers: {
						                    'Content-Type': 'application/json',
						                    'Authorization': `Bearer ${model.key}`,
						                },
						                body: JSON.stringify({
						                    model: "Precise-g4t",
						                    messages: [{ role: 'user', content: this.question }],
						                    stream: false,
						                }),
						            })
						            .then(response => response.json())
						            .then(data => {
						                model.loading = false;
						                if (data.choices && data.choices.length > 0) {
						                    const aiResponse = {
						                        id: Date.now() + Math.random(),
						                        content: this.processMessageContent(data.choices[0].message.content),  // 改这里
						                        rawContent: data.choices[0].message.content,
						                        type: 'ai-bubble',
						                        model: model.name,
						                    };
						                    this.messages.push(aiResponse);
						                    this.scrollToBottom();
						                    this.saveCurrentChat();
						                    this.saveChatHistory();
						                }
						            })
						            .catch(error => {
						                model.loading = false;
						                model.error = error.message;
						                console.error('Error:', error);
						            });
						        },
        sendRequestDoubao(model) {
            let messages = [];
            let conversation = '';
            
            // 如果是多轮对话模式,添加历史消息
            if (this.activeModel === model.name) {
                // 收集历史对话并格式化
                conversation = this.messages
                    .filter(msg => msg.model === model.name || msg.type === 'user-bubble')
                    .map(msg => {
                        if (msg.type === 'user-bubble') {
                            return `Human: ${msg.rawContent}`;
                        } else {
                            return `Assistant: ${msg.rawContent}`;
                        }
                    })
                    .join('\n\n');
                
                // 添加当前问题
                conversation += `\n\nHuman: ${this.question}`;
            }

            fetch(model.url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${model.key}`,
                    'Content-Type': 'application/json',
                    'Connection': 'keep-alive',
                    'Accept': '*/*',
                },
                body: JSON.stringify({
                    bot_id: model.botId,
                    user: model.userId,
                    query: this.activeModel === model.name ? conversation : this.question, // 如果是多轮对话,发送完整对话历史
                    stream: false
                }),
            })
            .then(response => response.json())
            .then(data => {
                model.loading = false;
                const firstMessage = data.messages.find(msg => msg.role === 'assistant' && msg.type === 'answer');
                if (firstMessage) {
                    const aiResponse = {
                        id: Date.now() + Math.random(),
                        content: this.processMessageContent(firstMessage.content),  // 改这里
                        rawContent: firstMessage.content,
                        type: 'ai-bubble',
                        model: model.name,
                    };
                    this.messages.push(aiResponse);
                    this.scrollToBottom();
                    this.saveCurrentChat();
                    this.saveChatHistory();
                    
                    // 添加这行来检查是否需要触发自动总结
                    this.checkAutoSummary(aiResponse);
                }
            })
            .catch(error => {
                model.loading = false;
                model.error = error.message;
                console.error('Error:', error);
            });
        },
		        sendRequestGTP(model) {
		            let messages = [];
		            
		            // 如果是多轮对话模式,添加历史消息
		            if (this.activeModel === model.name) {
		                messages = this.messages
		                    .filter(msg => msg.model === model.name || msg.type === 'user-bubble')
		                    .map(msg => ({
		                        role: msg.type === 'user-bubble' ? 'user' : 'assistant',
		                        content: msg.rawContent
		                    }));
		            } else {
		                // 单轮对话只发送当前问题
		                messages = [{
		                    role: 'user',
		                    content: this.question
		                }];
		            }

		            fetch(model.url, {
		                method: 'POST',
		                headers: {
		                    'Content-Type': 'application/json',
		                    'Authorization': `Bearer ${model.key}`,
		                },
		                body: JSON.stringify({
		                    messages: messages,
		                    stream: false,
		                }),
		            })
		            .then(response => response.json())
		            .then(data => {
		                model.loading = false;
		                if (data.choices && data.choices.length > 0) {
		                    const aiResponse = {
		                        id: Date.now() + Math.random(),
		                        content: this.processMessageContent(data.choices[0].message.content),  // 改这里
		                        rawContent: data.choices[0].message.content,
		                        type: 'ai-bubble',
		                        model: model.name,
		                    };
		                    this.messages.push(aiResponse);
		                    this.scrollToBottom();
		                    this.saveCurrentChat();
		                    this.saveChatHistory();
		                    
		                    // 添加这行来检查是否需要触发自动总结
		                    this.checkAutoSummary(aiResponse);
		                }
		            })
		            .catch(error => {
		                model.loading = false;
		                model.error = error.message;
		                console.error('Error:', error);
		            });
		        },
        scrollToBottom() {
            if (!this.$el) return; // 添加防护检查
            
            this.$nextTick(() => {
                const container = this.$el.querySelector('.responses');
                if (container) { // 添加防护检查
                    container.scrollTop = container.scrollHeight;
                }
            });
        },
        saveCurrentChat() {
            localStorage.setItem('currentChat', JSON.stringify(this.messages));
        },
        saveChatHistory() {
            let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
            
            // 获取当前会话 ID（如果不存在则创建新的）
            if (!this.currentSessionId) {
                this.currentSessionId = Date.now();
            }

            // 查找现有会话
            const existingSessionIndex = history.findIndex(s => s.id === this.currentSessionId);
            
            const session = {
                id: this.currentSessionId,
                lastUpdated: Date.now(),
                title: this.messages[0]?.rawContent || 'Untitled',
                messages: this.messages,
            };

            if (existingSessionIndex !== -1) {
                // 更新现有会话
                history[existingSessionIndex] = session;
            } else {
                // 添加新会话到开头
                history.unshift(session);
            }

            // 限制历史记录数量为100条
            history = history.slice(0, 100);

            // 压缩消息内容以节省空间
            history = history.map(session => ({
                ...session,
                messages: session.messages.map(msg => ({
                    id: msg.id,
                    type: msg.type,
                    model: msg.model,
                    rawContent: msg.rawContent,
                    // 只保存最近的HTML内容,older messages只保留rawContent
                    content: msg.content
                }))
            }));

            try {
                localStorage.setItem('chatHistory', JSON.stringify(history));
            } catch (e) {
                // 如果存储失败(超出限制),则尝试删除更多旧记录
                if (e.name === 'QuotaExceededError') {
                    history = history.slice(0, 50); // 减少为50条
                    localStorage.setItem('chatHistory', JSON.stringify(history));
                    this.showNotification('由于存储空间限制,仅保留最近50条记录');
                }
            }
        },
        openHistoryDialog() {
            const historyDialog = new mdui.Dialog('#history-dialog');
            historyDialog.open();
            
            // 更新对话框颜色
            UI.updateHistoryDialogColors();
        },
        getSessionSummary(session) {
            return session.messages.map(msg => msg.rawContent).join(' ');
        },
        deleteSession(session) {
            // 使用 mdui 的确认对话框
            mdui.confirm('确定要删除这个会话吗？此操作不可恢复。', '确认删除',
                () => {
                    // 用户确认后执行删除
                    const index = this.chatHistory.findIndex(s => s.id === session.id);
                    if (index !== -1) {
                        this.chatHistory.splice(index, 1);
                        localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
                        this.showNotification('会话已删除');
                    }
                },
                () => {
                    // 用户取消操作，不做任何事
                },
                {
                    confirmText: '确定删除',
                    cancelText: '取消',
                    modal: true,
                    closeOnEsc: true,
                    history: false // 防止与历史记录对话框冲突
                }
            );
        },
        exportSession(session) {
            this.sessionsToExport = [session];
            
            // 使用 mdui 方法关闭历史记录对话框
            const historyDialogElement = document.getElementById('history-dialog');
            if (historyDialogElement) {
                const historyDialog = new mdui.Dialog(historyDialogElement);
                historyDialog.close();
            }
            this.isSelectMode = false;

            // 延迟打开导出选项对话框
            setTimeout(() => {
                const exportDialog = new mdui.Dialog('#export-options-dialog');
                exportDialog.open();
            }, 300);
        },
        loadSession(session) {
            this.currentSessionId = session.id; // 设置当前会话ID
            this.messages = session.messages.map(msg => ({
        ...msg,
        isSummary: msg.model === '💡内容提要' // 确保内容提要消息被标记
    }));
            this.saveCurrentChat();
            this.showNotification('聊天记录已载入📝');
            
            // 关闭历史记录对话框
            const historyDialog = new mdui.Dialog('#history-dialog');
            historyDialog.close();
        },

        initChat() {
            this.messages = [];
            this.currentSessionId = null; // 重置当前会话ID
            this.scrollToBottom();
        },

        // 新增：创建新的聊天会话
        createNewChat() {
            this.initChat();
            this.currentSessionId = null; // 确保创建新的会话ID
            this.showNotification('已创建新的聊天会话');
        },

        copyToClipboard(content, rawContent) {
            // 检测内容中是否包含 LaTeX 公式
            const hasLatex = /\$\$?.+?\$\$?/.test(rawContent);
            
            let textToCopy;
            if (hasLatex) {
                // 如果包含 LaTeX，根据设置决定复制格式
                if (this.settings.copyLatex) {
                    // 保持原始的 LaTeX 格式
                    textToCopy = rawContent;
                } else {
                    // 将 LaTeX 转换为普通文本
                    textToCopy = rawContent
                        .replace(/\$\$(.+?)\$\$/g, (_, tex) => {
                            // 处理块级公式，尝试简化显示
                            return tex.trim()
                                .replace(/\\frac{(\d+)}{(\d+)}/g, '$1/$2')  // 将分数转换为 a/b 格式
                                .replace(/\\cdot/g, '*')  // 将乘号转换为 *
                                .replace(/\\times/g, '*')
                                .replace(/\\div/g, '/')
                                .replace(/\\sqrt{(.+?)}/g, '√($1)')
                                .replace(/\\left|\\right/g, '')
                                .replace(/[{}]/g, '');
                        })
                        .replace(/\$(.+?)\$/g, (_, tex) => {
                            // 处理行内公式，同样进行简化
                            return tex.trim()
                                .replace(/\\frac{(\d+)}{(\d+)}/g, '$1/$2')
                                .replace(/\\cdot/g, '*')
                                .replace(/\\times/g, '*')
                                .replace(/\\div/g, '/')
                                .replace(/\\sqrt{(.+?)}/g, '√($1)')
                                .replace(/\\left|\\right/g, '')
                                .replace(/[{}]/g, '');
                        });
                }
            } else {
                // 如果不包含 LaTeX，使用原有的 Markdown 设置逻辑
                textToCopy = this.settings.copyMarkdown ? rawContent : content.replace(/<[^>]+>/g, '');
            }
            
            // 复制到剪贴板
            const copyUsingClipboardAPI = () => {
                return navigator.clipboard.writeText(textToCopy);
            };

            const copyUsingExecCommand = () => {
                const textarea = document.createElement('textarea');
                textarea.value = textToCopy;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    const successful = document.execCommand('copy');
                    document.body.removeChild(textarea);
                    return successful ? Promise.resolve() : Promise.reject('复制失败');
                } catch (err) {
                    document.body.removeChild(textarea);
                    return Promise.reject(err);
                }
            };

            // 尝试所有可用的复制方法
            copyUsingClipboardAPI()
                .catch(() => copyUsingExecCommand())
                .then(() => {
                    this.showNotification(
                        hasLatex ? 
                            (this.settings.copyLatex ? '已复制 LaTeX 格式公式📋' : '已复制简化格式公式📋') :
                            (this.settings.copyMarkdown ? '已复制 Markdown 格式文本📋' : '已复制纯文本📋')
                    );
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                    this.showNotification('复制失败', true);
                });
        },
        showModelSelection() {
            // 创建临时副本
            this.tempModelSelection = this.models.map(model => ({
                name: model.name,
                selected: model.selected
            }));
            const modelSelectionDialog = new mdui.Dialog('#model-selection-dialog');
            modelSelectionDialog.open();
        },
        closeModelDialog() {
            // 恢复之前保存的选择状态
            this.models.forEach((model, index) => {
                if (this.tempModelSelection[index]) {
                    model.selected = this.tempModelSelection[index].selected;
                }
            });
            const modelSelectionDialog = new mdui.Dialog('#model-selection-dialog');
            modelSelectionDialog.close();
        },
        saveModelSelection() {
            // 根据当前激活的标签页保存相应的模型配置
            if (this.activeTab === 'basic') {
                localStorage.setItem('savedModels', JSON.stringify(this.models));
            } else {
                localStorage.setItem('savedAdvancedModels', JSON.stringify(this.advancedModels));
            }
            
            // 保存当前激活的标签页
            localStorage.setItem('activeTab', this.activeTab);
            
            this.showNotification('模型选择已保存');
            const modelSelectionDialog = new mdui.Dialog('#model-selection-dialog');
            modelSelectionDialog.close();
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.applyDarkMode();
            
            // 更新对话框颜色
            UI.updateHistoryDialogColors();
        },
        applyDarkMode() {
            document.body.classList.toggle('dark-mode', this.darkMode);
            document.body.classList.toggle('light-mode', !this.darkMode);
        },
        refreshPage() {
            location.reload();
        },

        // 新增方法来处理全选
        toggleAll() {
            this.models.forEach(model => {
                model.selected = this.allSelected;
            });
        },
        triggerFileUpload() {
            this.$refs.imageInput.click();
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            // 检查文件大小（限制为 10MB）
            if (file.size > 10 * 1024 * 1024) {
                this.showNotification('文件大小不能超过10MB', true);
                return;
            }

            // 根据文件类型处理
            if (file.type.startsWith('image/')) {
                // 处理图片文件
                this.handleImageFile(file);
            } else {
                // 处理其他类型文件
                this.handleOtherFile(file);
            }
        },
        handleImageFile(file) {
            // 使用现有的图片处理逻辑
            const processImage = () => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    const reader = new FileReader();

                    img.onerror = () => reject(new Error('图片加载失败'));

                    img.onload = () => {
                        try {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');

                            let width = img.width;
                            let height = img.height;
                            const maxWidth = 800;
                            const maxHeight = 800;

                            if (width > height) {
                                if (width > maxWidth) {
                                    height = Math.round((height * maxWidth) / width);
                                    width = maxWidth;
                                }
                            } else {
                                if (height > maxHeight) {
                                    width = Math.round((width * maxHeight) / height);
                                    height = maxHeight;
                                }
                            }

                            canvas.width = width;
                            canvas.height = height;

                            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                                ctx.imageSmoothingEnabled = true;
                                ctx.imageSmoothingQuality = 'high';
                            }

                            ctx.clearRect(0, 0, width, height);
                            ctx.drawImage(img, 0, 0, width, height);

                            let compressedImage;
                            try {
                                compressedImage = canvas.toDataURL('image/jpeg', 0.6);
                                resolve(compressedImage);
                            } catch (e) {
                                compressedImage = canvas.toDataURL('image/png');
                                resolve(compressedImage);
                            }
                        } catch (err) {
                            reject(err);
                        }
                    };

                    reader.onload = (e) => {
                        img.src = e.target.result;
                    };
                    reader.onerror = () => reject(new Error('文件读取失败'));
                    reader.readAsDataURL(file);
                });
            };

            processImage()
                .then(compressedImage => {
                    this.selectedImage = compressedImage;
                    this.imagePreview = compressedImage;
                    this.showNotification('图片已选择并压缩，可以添加描述文字后发送');
                })
                .catch(error => {
                    console.error('图片处理错误:', error);
                    this.showNotification('图片处理失败，请重试', true);
                    this.selectedImage = null;
                    this.imagePreview = null;
                });
        },
        // ... existing code ...
bulkExportSessions() {
    const selectedSessions = this.chatHistory.filter(session => session.selected);
    if (selectedSessions.length === 0) {
        this.showNotification('请先选择要导出的会话');
        return;
    }
    
    this.sessionsToExport = selectedSessions;
    
    // 使用 mdui 方法关闭历史记录对话框
    const historyDialogElement = document.getElementById('history-dialog');
    if (historyDialogElement) {
        const historyDialog = new mdui.Dialog(historyDialogElement);
        historyDialog.close();
    }
    this.isSelectMode = false;

    // 延迟打开导出选项对话框
    setTimeout(() => {
        const exportDialog = new mdui.Dialog('#export-options-dialog');
        exportDialog.open();
    }, 300);
},

bulkDeleteSessions() {
    const selectedSessions = this.chatHistory.filter(session => session.selected);
    if (selectedSessions.length === 0) {
        this.showNotification('请先选择要删除的会话');
        return;
    }

    // 添加确认弹窗
    if (!confirm(`确定要删除选中的 ${selectedSessions.length} 条会话记录吗？此操作不可恢复。`)) {
        return;
    }

    selectedSessions.forEach(session => {
        const index = this.chatHistory.findIndex(s => s.id === session.id);
        if (index !== -1) {
            this.chatHistory.splice(index, 1);
        }
    });

    localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
    this.showNotification('已删除选中的会话');
    this.isSelectMode = false;
    this.isAllSelected = false;
},
// ... existing code ...
        handleOtherFile(file) {
            // 保存文件信息到组件实例
            this.selectedFile = {
                name: file.name,
                type: file.type || '未知',
                size: file.size
            };

            // 读取文件为 base64
            const reader = new FileReader();
            reader.onload = (e) => {
                // 保存 base64 格式的文件内容
                this.selectedFile.base64Content = e.target.result;
                
                // 如果是文本文件，额外保存文本内容用于预览
                if (file.type.includes('text') || 
                    file.name.endsWith('.md') || 
                    file.name.endsWith('.json') ||
                    file.name.endsWith('.txt')) {
                    const textReader = new FileReader();
                    textReader.onload = (e) => {
                        this.selectedFile.content = e.target.result;
                    };
                    textReader.readAsText(file);
                }
                
                this.showNotification(`文件 ${file.name} 已选择，可以添加描述文字后发送`);
            };
            reader.onerror = () => {
                this.showNotification('文件读取失败，请重试', true);
            };
            reader.readAsDataURL(file);
        },
        isMobileDevice() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        showNotification(message, isError = false) {
            // 在移动设备上，只显示图片相关的提示
            if (this.isMobileDevice()) {
                // 只显示图片相关的提示消息
                if (message.includes('图片已选择') || message.includes('图片大小不能超过') || message.includes('图片处理失败')) {
                    mdui.snackbar({
                        message: message,
                        position: 'bottom',
                        timeout: isError ? 4000 : 2000,
                    });
                }
                // 其他提示消息在移动设备上不显示
                return;
            }

            // 桌面设备显示所有提示
            mdui.snackbar({
                message: message,
                position: 'right-top',
                timeout: isError ? 4000 : 2000,
            });
        },
        saveSettings(silent = false) {
            try {
                // 保存所有设置
                const settingsToSave = {
                    ...this.settings,
                    darkMode: this.darkMode
                };
                localStorage.setItem('chatSettings', JSON.stringify(settingsToSave));

                // 应用设置
                this.applySettings(silent);

                // 只在非静默模式下显示通知
                if (!silent) {
                    this.showNotification('设置已保存');
                }
            } catch (error) {
                console.error('保存设置失败:', error);
                if (!silent) {
                    this.showNotification('保存设置失败', true);
                }
            }
        },
        applySettings(silent = false) {
            // 应用字体大小
            document.documentElement.style.setProperty('--base-font-size', this.getFontSize());
            
            // 应用主题设置
            this.updateThemeColors(silent);
            
            // 应用深色模式
            this.applyDarkMode();
            
            // 应用其他视觉设置
            document.body.classList.toggle('expand-messages', this.settings.expandMessages);
            document.body.classList.toggle('show-elevator', this.settings.showElevator);

            // 只在非静默模式下显示通知
            if (!silent) {
                this.showNotification('设置已应用');
            }
        },
        openSettingsDialog() {
            // 参考历史记录对话框的实现方式
            const dialog = new mdui.Dialog('#settings-dialog', {
                history: false,
                modal: true
            });
            
            // 初始化标签页
            this.$nextTick(() => {
                new mdui.Tab('#settings-dialog .mdui-tab');
                dialog.open();
            });
        },
        getWelcomeMessage() {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                return '早安！开启充满希望的一天 ☀️';
            } else if (hour >= 12 && hour < 14) {
                return '中午好！休息时间到了 🌤';
            } else if (hour >= 14 && hour < 18) {
                return '下午好！让我们继续前行 ⚡';
            } else if (hour >= 18 && hour < 22) {
                return '晚上好！结束一天的忙碌 🌙';
            } else if (hour >= 22 || hour < 1) {
                return '夜深了，该休息啦 🌛';
            } else {
                return '凌晨了，还在奋斗吗？ 🌠';
            }
        },
        
        getWelcomeSubtext() {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) {
                return '让我们一起探讨今天的话题吧！';
            } else if (hour >= 12 && hour < 14) {
                return '午休过后，让我们继续探讨有趣的话题~';
            } else if (hour >= 14 && hour < 18) {
                return '喝杯下午茶，和我聊聊天吧！';
            } else if (hour >= 18 && hour < 22) {
                return '分享一下今天的收获吧！';
            } else if (hour >= 22 || hour < 1) {
                return '养精蓄锐，明天继续！记得早点休息哦~';
            } else {
                return '注意休息，让我们简单聊会天吧~';
            }
        },
        toggleSelectMode() {
            this.isSelectMode = !this.isSelectMode;
            if (!this.isSelectMode) {
                // 退出选择模式时清除所有选择
                this.chatHistory.forEach(session => {
                    session.selected = false;
                });
                this.isAllSelected = false;
            }
        },

        deleteSelectedSessions() {
            const selectedCount = this.filteredChatHistory.filter(s => s.selected).length;
            if (selectedCount === 0) {
                this.showNotification('请先选择要删除的记录');
                return;
            }
            
            this.deleteConfirmMessage = `确定要删除选中的 ${selectedCount} 条记录吗？此操作无法撤销。`;
            this.confirmDialog = new mdui.Dialog('#confirm-delete-dialog');
            this.confirmDialog.open();
        },

        formatDate(timestamp) {
            const date = new Date(timestamp);
            const now = new Date();
            const diff = now - date;
            
            // 今天的消息显示具体时间
            if (diff < 24 * 60 * 60 * 1000 && date.getDate() === now.getDate()) {
                return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            }
            // 昨天的消息显示"昨天"
            else if (diff < 48 * 60 * 60 * 1000 && date.getDate() === now.getDate() - 1) {
                return '昨天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            }
            // 一周内的消息显示星期几
            else if (diff < 7 * 24 * 60 * 60 * 1000) {
                const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
                return weekdays[date.getDay()];
            }
            // 其他显示完整日期
            else {
                return date.toLocaleDateString('zh-CN', { 
                    year: 'numeric', 
                    month: '2-digit', 
                    day: '2-digit' 
                });
            }
        },

        sortHistory() {
            this.chatHistory.sort((a, b) => {
                return this.sortOrder === 'newest' ? 
                    b.lastUpdated - a.lastUpdated : 
                    a.lastUpdated - b.lastUpdated;
            });
            localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
        },

        closeHistoryDialog() {
            const historyDialogElement = document.getElementById('history-dialog');
            if (historyDialogElement) {
                const historyDialog = new mdui.Dialog(historyDialogElement);
                historyDialog.close();
            }
            this.isSelectMode = false;
        },

        scrollToPreviousBubble() {
            const prevIndex = this.currentBubbleIndex - 1;
            if (prevIndex >= 0) {
                this.currentBubbleIndex = prevIndex;
                this.scrollToBubble(prevIndex);
            } else {
                // 如果到顶了，跳到最后一条
                this.currentBubbleIndex = this.messages.length - 1;
                this.scrollToBubble(this.messages.length - 1);
            }
        },

        scrollToNextBubble() {
            const nextIndex = this.currentBubbleIndex + 1;
            if (nextIndex < this.messages.length) {
                this.currentBubbleIndex = nextIndex;
                this.scrollToBubble(nextIndex);
            } else {
                // 如果到底了，回到第一条
                this.currentBubbleIndex = 0;
                this.scrollToBubble(0);
            }
        },

        scrollToBubble(index) {
            const bubbles = document.querySelectorAll('.bubble');
            if (bubbles[index]) {
                const bubble = bubbles[index];
                const container = document.querySelector('.responses');
                
                // 计算滚动位置
                const bubbleTop = bubble.offsetTop;
                const containerHeight = container.clientHeight;
                
                // 将气泡顶部定位到容器1/3处
                const scrollTop = bubbleTop - (containerHeight / 3);
                
                // 平滑滚动
                container.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                });

                // 添加高亮效果
                bubble.style.transition = 'background-color 0.3s ease';
                bubble.style.backgroundColor = 'rgba(63,81,181,0.1)';
                setTimeout(() => {
                    bubble.style.backgroundColor = '';
                }, 1000);
            }
        },

        updateCurrentBubbleIndex() {
            // 只在没有当前索引时初始化
            if (this.currentBubbleIndex === undefined || this.currentBubbleIndex === null) {
                this.currentBubbleIndex = 0;
            }
        },
        startConversation(message) {
            this.activeModel = message.model; // 设置当前活跃的模型
            this.showNotification('进入多轮对话模式，点击退出以返回正常模式');
        },
        exitConversation() {
            this.activeModel = null; // 清除活跃模型
            this.showNotification('已退出多轮对话模式');
        },
        toggleSelectAll() {
            this.isAllSelected = !this.isAllSelected;
            // 使用 chatHistory 而不是 filteredChatHistory
            this.chatHistory.forEach(session => {
                session.selected = this.isAllSelected;
            });
        },
        resetDefaultModels() {
            // 添加确认对话框
            mdui.confirm('确定要恢复默认模型选择吗？这将清除您保存的自定义选择（确认后刷新重启生效）。', '确认恢复',
                () => {
                    // 用户确认后执行恢复操作
                    // 从默认配置重新设置模型的选中状态
                    this.models.forEach(model => {
                        const defaultModel = this.defaultModels.find(m => m.name === model.name);
                        if (defaultModel) {
                            model.selected = defaultModel.selected;
                        }
                    });
                    
                    // 清除localStorage中保存的自定义选择
                    localStorage.removeItem('savedModels');
                    
                    // 显示成功提示
                    this.showNotification('已恢复默认模型选择');
                },
                () => {
                    // 用户取消操作
                },
                {
                    confirmText: '确定恢复',
                    cancelText: '取消'
                }
            );
        },
        executeExport() {
            const sessions = this.sessionsToExport;
            let exportContent = '';
            
            if (this.exportFormat === 'json') {
                // JSON 格式导出
                const exportData = sessions.map(session => ({
                    title: session.title,
                    date: new Date(session.lastUpdated).toLocaleString(),
                    messages: session.messages.map(msg => {
                        // 确保消息内容正确处理
                        let content;
                        if (this.exportWithMarkdown) {
                            content = msg.rawContent || msg.content;
                        } else {
                            // 如果没有 rawContent，则从 content 中移除 HTML 标签
                            content = (msg.content || '')
                                .replace(/<[^>]+>/g, '') // 移除 HTML 标签
                                .replace(/&lt;/g, '<')   // 转换 HTML 实体
                                .replace(/&gt;/g, '>')
                                .replace(/&amp;/g, '&')
                                .replace(/&quot;/g, '"')
                                .replace(/&#39;/g, "'");
                        }
                        
                        return {
                            role: msg.type === 'user-bubble' ? 'user' : 'assistant',
                            model: msg.model || null,
                            content: content
                        };
                    })
                }));
                exportContent = JSON.stringify(exportData, null, 2);
            } else {
                // TXT 格式或剪贴板格式
                sessions.forEach(session => {
                    exportContent += `=== ${session.title} (${new Date(session.lastUpdated).toLocaleString()}) ===\n\n`;
                    session.messages.forEach(msg => {
                        const role = msg.type === 'user-bubble' ? '用户' : '助手';
                        const model = msg.model ? ` (${msg.model})` : '';
                        const content = this.exportWithMarkdown ? 
                            (msg.rawContent || msg.content) : 
                            (msg.content || '').replace(/<[^>]+>/g, '');
                        exportContent += `[${role}${model}]:\n${content}\n\n`;
                    });
                    exportContent += '-------------------\n\n';
                });
            }

            if (this.exportFormat === 'clipboard') {
                // 复制到剪贴板
                navigator.clipboard.writeText(exportContent)
                    .then(() => {
                        this.showNotification('已复制到剪贴板');
                    })
                    .catch(err => {
                        console.error('复制失败:', err);
                        this.showNotification('复制失败，请重试', true);
                    });
            } else {
                // 下载文件
                const blob = new Blob([exportContent], { 
                    type: this.exportFormat === 'json' ? 'application/json;charset=utf-8' : 'text/plain;charset=utf-8' 
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `chat_history_${new Date().toISOString().slice(0,10)}.${this.exportFormat}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                this.showNotification('导出成功');
            }

            // 关闭对话框
            const exportDialog = new mdui.Dialog('#export-options-dialog');
            exportDialog.close();
            this.sessionsToExport = []; // 清空待导出会话
        },
        // 触发内容提要生成
        async triggerContentSummary() {
            if (this.isGeneratingSummary) return;
            
            try {
                // 获取当前对话的最后一个用户问题和所有模型回复
                const lastUserQuestion = [...this.messages]
                    .reverse()
                    .find(msg => msg.type === 'user-bubble');
                    
                if (!lastUserQuestion) {
                    this.showNotification('未找到用户问题', true);
                    return;
                }
                
                const modelResponses = this.messages.filter(msg => 
                    msg.type === 'ai-bubble' && 
                    msg.id > lastUserQuestion.id &&
                    !msg.isSummary // 排除之前的提要
                );
                
                if (modelResponses.length === 0) {
                    this.showNotification('没有找到模型回复', true);
                    return;
                }
                
                // 构建提要内容
                const summaryContent = `${this.summaryPrompt}
用户问题：${lastUserQuestion.rawContent}

模型回复：
${modelResponses.map(msg => `${msg.model}：${msg.rawContent}`).join('\n\n')}`;
                
                // 获取选定的提要模型
                const summaryModel = this.models.find(m => 
                    m.name === this.settings.contentSummaryModel
                );
                
                if (!summaryModel) {
                    this.showNotification('未找到指定的提要模型', true);
                    return;
                }
                
                this.isGeneratingSummary = true;
                
                const response = await this.sendModelRequest(summaryModel, summaryContent);
                
                if (response) {
                    // 处理响应文本，添加点击事件
                    const processedResponse = response.replace(
                        /<model-link id="([^"]+)">([^<]+)<\/model-link>/g,
                        '<a href="#" class="model-link" data-model="$1">$2</a>'
                    );

                    const summaryResponse = {
                        id: Date.now() + Math.random(),
                        content: this.processMessageContent(processedResponse),  // 改这里
                        rawContent: response,
                        type: 'ai-bubble',
                        model: '💡内容提要',
                        isSummary: true
                    };
                    
                    this.messages.push(summaryResponse);
                    this.scrollToBottom();
                    this.saveCurrentChat();
                    this.saveChatHistory();
                    
                    // 添加点击事件监听
                    this.$nextTick(() => {
                        const links = document.querySelectorAll('.model-link');
                        links.forEach(link => {
                            link.addEventListener('click', (e) => {
                                e.preventDefault();
                                const modelName = e.target.getAttribute('data-model');
                                this.scrollToModelMessage(modelName);
                            });
                        });
                    });
                    
                    this.showNotification('内容提要已生成');
                } else {
                    throw new Error('模型未返回有效响应');
                }
            } catch (error) {
                console.error('生成内容提要失败:', error);
                this.showNotification(`生成内容提要失败: ${error.message}`, true);
            } finally {
                this.isGeneratingSummary = false;
            }
        },
        
        // 检查是否需要自动触发内容提要
        checkAutoSummary(message) {
            if (!this.settings.showContentSummary || !this.settings.enableAutoSummary) return;
            
            // 获取当前对话的最后一个用户问题
            const lastUserQuestion = [...this.messages]
                .reverse()
                .find(msg => msg.type === 'user-bubble');
                
            if (!lastUserQuestion) return;
            
            // 统计该问题收到的模型回复数
            const responseCount = this.messages.filter(msg => 
                msg.type === 'ai-bubble' && 
                !msg.isSummary && 
                msg.id > lastUserQuestion.id
            ).length;
            
            // 达到阈值时触发提要
            if (responseCount >= this.settings.autoSummaryThreshold) {
                this.triggerContentSummary();
            }
        },
        // 添加 sendModelRequest 方法
        async sendModelRequest(model, content) {
            if (model.requestType === "doubao") {
                const response = await fetch(model.url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${model.key}`,
                        'Content-Type': 'application/json',
                        'Connection': 'keep-alive',
                        'Accept': '*/*',
                    },
                    body: JSON.stringify({
                        bot_id: model.botId,
                        user: model.userId,
                        query: content,
                        stream: false
                    }),
                });
                const data = await response.json();
                const firstMessage = data.messages.find(msg => msg.role === 'assistant' && msg.type === 'answer');
                return firstMessage ? firstMessage.content : null;
            } else if (model.requestType === "gtp") {
                const response = await fetch(model.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${model.key}`,
                    },
                    body: JSON.stringify({
                        messages: [{
                            role: 'user',
                            content: content
                        }],
                        stream: false,
                    }),
                });
                const data = await response.json();
                return data.choices?.[0]?.message?.content || null;
            } else if (model.requestType === "type1") {
                const response = await fetch(model.url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${model.key}`,
                        'Accept': 'application/json',
                        'Cache-Control': 'no-cache',
                    },
                    body: JSON.stringify({
                        model: model.model || 'kimi',
                        messages: [{
                            role: 'user',
                            content: content
                        }],
                        stream: false,
                        use_search: false,
                        temperature: 0.7
                    }),
                    credentials: 'omit'
                });
                const data = await response.json();
                return data.choices?.[0]?.message?.content || null;
                            } else if (model.requestType === "github") {
                const response = await fetch(`${model.url}/chat/completions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${model.key}`,
                    },
                    body: JSON.stringify({
                        messages: [{
                            role: 'user',
                            content: content
                        }],
                        model: model.model || 'DeepSeek-R1',
                        temperature: 0.7,
                        max_tokens: 4000
                    })
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();
                return data.choices?.[0]?.message?.content || null;
            } else if (model.requestType === "type8") {
                const response = await fetch(`${model.url}/v1/chat/completions`, {  // 添加 /v1/chat/completions 路径
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${model.key}`,
                    },
                    body: JSON.stringify({
                        model: model.model,
                        messages: [{
                            role: 'user',
                            content: content
                        }],
                        temperature: 0.7,
                        max_tokens: 2000,  // 添加 max_tokens 参数
                        top_p: 0.95,      // 添加 top_p 参数
                        frequency_penalty: 0,  // 添加 frequency_penalty 参数
                        presence_penalty: 0    // 添加 presence_penalty 参数
                    })
                });
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }
                
                const data = await response.json();
                
                // 增强错误处理
                if (data.error) {
                    console.error('API Error:', data.error);
                    throw new Error(data.error.message || 'Unknown API error');
                }
                
                return data.choices?.[0]?.message?.content || null;
            }
            // 其他类型的模型请求可以根据需要添加
            return null;
        },
        // 添加新方法
        scrollToModelMessage(modelName) {
            // 找到对应模型的消息元素
            const messageElement = document.querySelector(`.bubble[data-model="${modelName}"]`);
            if (messageElement) {
                // 平滑滚动到目标位置
                messageElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
                
                // 添加高亮效果
                messageElement.style.transition = 'background-color 0.3s ease';
                messageElement.style.backgroundColor = 'rgba(255, 193, 7, 0.2)';
                setTimeout(() => {
                    messageElement.style.backgroundColor = '';
                }, 1000);
            }
        },
        // 基础标签页全选切换
        toggleBasicAll() {
            this.models.forEach(model => {
                model.selected = this.basicAllSelected;
            });
        },

        // 高级标签页全选切换
        toggleAdvancedAll() {
            this.advancedModels.forEach(model => {
                model.selected = this.advancedAllSelected;
            });
        },

        // 添加新的方法处理模型链接点击
        handleModelLinkClick(e) {
            e.preventDefault();
            const modelId = e.currentTarget.getAttribute('id');
            if (modelId) {
                // 移除 emoji 和 "👆🏻" 符号以匹配实际的模型名称
                const modelName = modelId.replace(/👆🏻$/, '');
                this.scrollToModelMessage(modelName);
            }
        },

        // 更新 scrollToModelMessage 方法
        scrollToModelMessage(modelName) {
            const messages = this.messages;
            // 从当前位置向上查找最近的匹配消息
            for (let i = messages.length - 1; i >= 0; i--) {
                const message = messages[i];
                if (message.type === 'ai-bubble' && message.model === modelName) {
                    const element = document.querySelector(`[data-message-id="${message.id}"]`);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // 添加高亮效果
                        element.classList.add('highlight-message');
                        setTimeout(() => {
                            element.classList.remove('highlight-message');
                        }, 2000);
                        break;
                    }
                }
            }
        },
        sendRequestYuanqi(model) {
            let messages = [];
            
            // 如果是多轮对话模式,添加历史消息
            if (this.activeModel === model.name) {
                messages = this.messages
                    .filter(msg => msg.model === model.name || msg.type === 'user-bubble')
                    .map(msg => ({
                        role: msg.type === 'user-bubble' ? 'user' : 'assistant',
                        content: [{
                            type: 'text',
                            text: msg.rawContent
                        }]
                    }));
            } else {
                // 单轮对话只发送当前问题
                messages = [{
                    role: 'user',
                    content: [{
                        type: 'text',
                        text: this.question
                    }]
                }];
            }

            fetch(model.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${model.key}`,
                    'X-Source': 'openapi'
                },
                body: JSON.stringify({
                    assistant_id: model.assistantId,
                    user_id: model.userId || 'default_user',  // 如果 userId 为空则使用默认值
                    stream: false,
                    messages: messages
                }),
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                model.loading = false;
                if (data.choices && data.choices.length > 0) {
                    // 从 message.content 中获取文本内容
                    const messageContent = data.choices[0].message.content;
                    
                    // 解析LaTeX公式
                    let parsedContent = messageContent;
                    
                    // 处理行内公式 $...$ 
                    parsedContent = parsedContent.replace(/\$([^\$]+)\$/g, (match, formula) => {
                        try {
                            return katex.renderToString(formula, {
                                throwOnError: false,
                                displayMode: false
                            });
                        } catch (e) {
                            console.error('LaTeX解析错误:', e);
                            return match;
                        }
                    });
                    
                    // 处理块级公式 $$...$$ 
                    parsedContent = parsedContent.replace(/\$\$([^\$]+)\$\$/g, (match, formula) => {
                        try {
                            return katex.renderToString(formula, {
                                throwOnError: false,
                                displayMode: true
                            });
                        } catch (e) {
                            console.error('LaTeX解析错误:', e);
                            return match;
                        }
                    });
                    
                    const aiResponse = {
                        id: Date.now() + Math.random(),
                        content: this.processMessageContent(parsedContent),  // 使用处理过LaTeX的内容
                        rawContent: messageContent,
                        type: 'ai-bubble',
                        model: model.name,
                    };
                    
                    this.messages.push(aiResponse);
                    this.scrollToBottom();
                    this.saveCurrentChat();
                    this.saveChatHistory();
                    
                    // 检查是否需要触发自动总结
                    this.checkAutoSummary(aiResponse);
                    
                    // 显示通知
                    this.showNotification(`${model.name} 已响应`);
                } else {
                    throw new Error('No valid response content');
                }
            })
            .catch(error => {
                model.loading = false;
                model.error = error.message;
                console.error('Error:', error);
                this.showNotification(`${model.name} 请求失败: ${error.message}`, true);
            });
        },
        sendRequestYiyan(model) {
            // 构建完整的URL，包含查询参数
            const url = `${model.url}?id=${model.userId}&key=${model.key}&words=${encodeURIComponent(this.question)}`;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    model.loading = false;
                    if (data.code === 200 && data.msg) {
                        const aiResponse = {
                            id: Date.now() + Math.random(),
                            content: this.processMessageContent(data.msg),  // 使用处理过LaTeX的内容
                            rawContent: data.msg,
                            type: 'ai-bubble',
                            model: model.name,
                        };
                        this.messages.push(aiResponse);
                        this.scrollToBottom();
                        this.saveCurrentChat();
                        this.saveChatHistory();
                        
                        // 检查是否需要触发自动总结
                        this.checkAutoSummary(aiResponse);
                        
                        // 显示通知
                        this.showNotification(`${model.name} 已响应`);
                    } else {
                        throw new Error(data.msg || 'Invalid response from server');
                    }
                })
                .catch(error => {
                    model.loading = false;
                    model.error = error.message;
                    console.error('Error:', error);
                    this.showNotification(`${model.name} 请求失败: ${error.message}`, true);
                });
        },
        sendRequestGithub(model) {
            fetch(model.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${model.key}`,
                },
                body: JSON.stringify({
                    model: model.model || 'gpt-4',
                    messages: [{ role: 'user', content: this.question }],
                    temperature: 0.7,
                    max_tokens: 4000,
                    stream: false
                }),
            })
            .then(response => response.json())
            .then(data => {
                model.loading = false;
                if (data.choices && data.choices.length > 0) {
                    const aiResponse = {
                        id: Date.now() + Math.random(),
                        content: this.processMessageContent(data.choices[0].message.content),  // 使用处理过LaTeX的内容
                        rawContent: data.choices[0].message.content,
                        type: 'ai-bubble',
                        model: model.name,
                    };
                    this.messages.push(aiResponse);
                    this.scrollToBottom();
                    this.saveCurrentChat();
                    this.saveChatHistory();
                    
                    // 检查是否需要触发自动总结
                    this.checkAutoSummary(aiResponse);
                }
            })
            .catch(error => {
                model.loading = false;
                model.error = error.message;
                console.error('Error:', error);
                
                if (!this.isMobileDevice()) {
                    this.showNotification(`${model.name} 处理请求时出错: ${error.message}`, true);
                }
            });
        },
        processMessageContent(content) {
            // 先处理 LaTeX
            content = content.replace(/\$\$(.+?)\$\$/g, (_, tex) => {
                try {
                    return katex.renderToString(tex.trim(), { displayMode: true });
                } catch (e) {
                    return _;
                }
            });
            content = content.replace(/\$(.+?)\$/g, (_, tex) => {
                try {
                    return katex.renderToString(tex.trim(), { displayMode: false });
                } catch (e) {
                    return _;
                }
            });
            // 再处理 Markdown
            return marked.parse(content);
        },
        closeSettingsDialog() {
            const dialog = new mdui.Dialog('#settings-dialog');
            dialog.close();
        },
        // 应用预设主题
        applyThemePreset() {
            const preset = this.presetThemes[this.settings.themePreset];
            if (preset) {
                this.settings.primaryColor = preset.primary;
                this.settings.accentColor = preset.accent;
                this.settings.headerColor = preset.header;
                this.updateThemeColors();
            }
        },

        // 更新主题颜色
        updateThemeColors(silent = false) {
            try {
                const root = document.documentElement;
                
                // 设置基础颜色变量
                root.style.setProperty('--primary-color', this.settings.primaryColor);
                root.style.setProperty('--accent-color', this.settings.accentColor);
                root.style.setProperty('--header-color', this.settings.headerColor);
                
                // 获取主色调的亮度
                const primaryBrightness = this.getColorBrightness(this.settings.primaryColor);
                const accentBrightness = this.getColorBrightness(this.settings.accentColor);
                
                // 计算衍生颜色
                const derivedColors = this.calculateDerivedColors(
                    this.settings.primaryColor, 
                    this.settings.accentColor,
                    this.darkMode
                );
                
                // 应用衍生颜色
                Object.entries(derivedColors).forEach(([key, value]) => {
                    root.style.setProperty(`--${key}`, value);
                });
                
                // 更新 MDUI 主题类
                const mduiPrimaryClass = `mdui-theme-primary-${this.getClosestMduiColor(this.settings.primaryColor)}`;
                const mduiAccentClass = `mdui-theme-accent-${this.getClosestMduiColor(this.settings.accentColor)}`;
                
                document.body.className = document.body.className
                    .replace(/mdui-theme-primary-\w+/, mduiPrimaryClass)
                    .replace(/mdui-theme-accent-\w+/, mduiAccentClass);
                
                // 保存设置
                this.saveThemeSettings();
                
                if (!silent) {
                    this.showNotification('主题已更新');
                }
            } catch (error) {
                console.error('更新主题颜色失败:', error);
                if (!silent) {
                    this.showNotification('更新主题失败', true);
                }
            }
        },

        // 计算衍生颜色
        calculateDerivedColors(primaryColor, accentColor, isDarkMode) {
            const colors = {};
            
            // 转换主色调为HSL
            const primaryHSL = this.hexToHSL(primaryColor);
            const accentHSL = this.hexToHSL(accentColor);
            
            // 基础文本颜色
            colors['text-primary'] = isDarkMode ? 
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.8, 85) :
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.9, 25);
            
            // 次要文本颜色
            colors['text-secondary'] = isDarkMode ?
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.6, 75) :
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.7, 35);
            
            // 按钮颜色
            colors['button-primary'] = this.adjustColorBrightness(primaryColor, isDarkMode ? 10 : -10);
            colors['button-hover'] = this.adjustColorBrightness(primaryColor, isDarkMode ? 20 : -20);
            
            // 链接颜色
            colors['link-color'] = isDarkMode ?
                this.hslToHex(accentHSL.h, accentHSL.s * 0.9, 65) :
                this.hslToHex(accentHSL.h, accentHSL.s, 45);
            
            // 边框颜色
            colors['border-color'] = isDarkMode ?
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.3, 30) :
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.2, 85);
            
            // 背景色调
            colors['background-primary'] = isDarkMode ?
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.2, 15) :
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.1, 98);
            
            colors['background-secondary'] = isDarkMode ?
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.2, 20) :
                this.hslToHex(primaryHSL.h, primaryHSL.s * 0.1, 95);
            
            // 高亮色
            colors['highlight-color'] = isDarkMode ?
                this.hslToHex(accentHSL.h, accentHSL.s * 0.8, 60) :
                this.hslToHex(accentHSL.h, accentHSL.s, 50);
            
            return colors;
        },

        // 辅助方法：十六进制转HSL
        hexToHSL(hex) {
            const rgb = this.hexToRgb(hex);
            const r = rgb.r / 255;
            const g = rgb.g / 255;
            const b = rgb.b / 255;
            
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;
            
            if (max === min) {
                h = s = 0;
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            
            return {
                h: Math.round(h * 360),
                s: Math.round(s * 100),
                l: Math.round(l * 100)
            };
        },

        // HSL转十六进制
        hslToHex(h, s, l) {
            s /= 100;
            l /= 100;
            
            const c = (1 - Math.abs(2 * l - 1)) * s;
            const x = c * (1 - Math.abs((h / 60) % 2 - 1));
            const m = l - c/2;
            let r = 0, g = 0, b = 0;
            
            if (0 <= h && h < 60) {
                r = c; g = x; b = 0;
            } else if (60 <= h && h < 120) {
                r = x; g = c; b = 0;
            } else if (120 <= h && h < 180) {
                r = 0; g = c; b = x;
            } else if (180 <= h && h < 240) {
                r = 0; g = x; b = c;
            } else if (240 <= h && h < 300) {
                r = x; g = 0; b = c;
            } else if (300 <= h && h < 360) {
                r = c; g = 0; b = x;
            }
            
            r = Math.round((r + m) * 255);
            g = Math.round((g + m) * 255);
            b = Math.round((b + m) * 255);
            
            return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
        },

        // 添加主题设置保存方法
        saveThemeSettings() {
            try {
                const themeData = {
                    headerColor: this.settings.headerColor,
                    primaryColor: this.settings.primaryColor,
                    accentColor: this.settings.accentColor,
                    themePreset: this.settings.themePreset
                };
                localStorage.setItem('currentTheme', JSON.stringify(themeData));
            } catch (error) {
                console.warn('保存主题设置失败:', error);
            }
        },

        // 添加一个应用默认主题的方法
        applyDefaultTheme() {
            const defaultTheme = {
                primaryColor: '#3f51b5',
                accentColor: '#ff4081',
                headerColor: '#007bff'
            };

            const root = document.documentElement;
            root.style.setProperty('--primary-color', defaultTheme.primaryColor);
            root.style.setProperty('--accent-color', defaultTheme.accentColor);
            root.style.setProperty('--header-color', defaultTheme.headerColor);

            document.body.classList.add('mdui-theme-primary-indigo', 'mdui-theme-accent-pink');
        },

        // 从图片提取主题色
        async extractThemeColors(event) {
            const file = event.target.files[0];
            if (!file) return;

            try {
                const img = await this.loadImage(file);
                const colors = await this.analyzeImageColors(img);
                
                // 设置所有颜色
                this.settings.primaryColor = colors.primary;
                this.settings.accentColor = colors.accent;
                this.settings.headerColor = colors.header; // 添加这行
                this.settings.themePreset = 'custom';
                
                // 立即应用颜色更改
                this.updateThemeColors();
                
                // 清空文件输入，允许重新选择相同的文件
                event.target.value = '';
                
                this.showNotification('已从图片提取配色方案');
            } catch (error) {
                console.error('提取颜色失败:', error);
                this.showNotification('提取颜色失败，请重试', true);
            }
        },

        // 加载图片
        loadImage(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = e.target.result;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        },

        // 分析图片颜色
        analyzeImageColors(img) {
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                const colors = [];
                
                // 收集所有颜色
                for (let i = 0; i < imageData.length; i += 4) {
                    const r = imageData[i];
                    const g = imageData[i + 1];
                    const b = imageData[i + 2];
                    colors.push({ r, g, b });
                }
                
                // 使用 K-means 聚类找出主要颜色
                const mainColors = this.kMeansColors(colors, 5);
                
                resolve({
                    primary: this.rgbToHex(mainColors[0]),
                    accent: this.rgbToHex(mainColors[1]),
                    header: this.rgbToHex(mainColors[2]) // 添加顶部栏颜色
                });
            });
        },

        // 重置主题
        resetTheme() {
            this.settings.themePreset = 'default';
            this.applyThemePreset();
            this.showNotification('已重置主题设置');
        },

        // 辅助方法：RGB转十六进制
        rgbToHex({ r, g, b }) {
            return `#${[r, g, b].map(x => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('')}`;
        },

        // 辅助方法：获取最接近的 MDUI 颜色
        getClosestMduiColor(hex) {
            const mduiColors = {
                red: '#f44336',
                pink: '#e91e63',
                purple: '#9c27b0',
                'deep-purple': '#673ab7',
                indigo: '#3f51b5',
                blue: '#2196f3',
                cyan: '#00bcd4',
                teal: '#009688',
                green: '#4caf50',
                orange: '#ff9800',
                brown: '#795548',
                grey: '#9e9e9e',
                'blue-grey': '#607d8b'
            };

            let closestColor = 'indigo';
            let minDistance = Infinity;

            Object.entries(mduiColors).forEach(([name, value]) => {
                const distance = this.colorDistance(hex, value);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestColor = name;
                }
            });

            return closestColor;
        },

        // 辅助方法：计算颜色距离
        colorDistance(hex1, hex2) {
            const rgb1 = this.hexToRgb(hex1);
            const rgb2 = this.hexToRgb(hex2);
            
            return Math.sqrt(
                Math.pow(rgb1.r - rgb2.r, 2) +
                Math.pow(rgb1.g - rgb2.g, 2) +
                Math.pow(rgb1.b - rgb2.b, 2)
            );
        },

        // 辅助方法：十六进制转RGB
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        },

        // 添加计算颜色亮度的辅助方法
        getColorBrightness(hex) {
            const rgb = this.hexToRgb(hex);
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },

        // 添加 K-means 聚类方法
        kMeansColors(colors, k) {
            // 随机选择初始中心点
            let centroids = colors.sort(() => 0.5 - Math.random()).slice(0, k);
            let oldCentroids = [];
            let iterations = 0;
            const maxIterations = 20;

            while (!this.areColorArraysEqual(centroids, oldCentroids) && iterations < maxIterations) {
                // 保存旧的中心点
                oldCentroids = [...centroids];
                iterations++;

                // 分配点到最近的中心点
                const clusters = new Array(k).fill().map(() => []);
                colors.forEach(color => {
                    let minDistance = Infinity;
                    let closestCentroidIndex = 0;

                    centroids.forEach((centroid, index) => {
                        const distance = this.colorDistance(
                            this.rgbToHex(color),
                            this.rgbToHex(centroid)
                        );
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestCentroidIndex = index;
                        }
                    });

                    clusters[closestCentroidIndex].push(color);
                });

                // 更新中心点
                centroids = clusters.map(cluster => {
                    if (cluster.length === 0) return centroids[0];
                    return {
                        r: Math.round(cluster.reduce((sum, c) => sum + c.r, 0) / cluster.length),
                        g: Math.round(cluster.reduce((sum, c) => sum + c.g, 0) / cluster.length),
                        b: Math.round(cluster.reduce((sum, c) => sum + c.b, 0) / cluster.length)
                    };
                });
            }

            // 按亮度排序
            return centroids.sort((a, b) => {
                const brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000;
                const brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000;
                return brightnessB - brightnessA;
            });
        },

        // 辅助方法：比较两个颜色数组是否相等
        areColorArraysEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) return false;
            return arr1.every((color, i) => {
                return color.r === arr2[i].r &&
                       color.g === arr2[i].g &&
                       color.b === arr2[i].b;
            });
        },

        // 修改图片分析方法，增加错误处理和调试信息
        async analyzeImageColors(img) {
            return new Promise((resolve, reject) => {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    // 限制画布大小以提高性能
                    const maxSize = 100;
                    const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                    canvas.width = img.width * scale;
                    canvas.height = img.height * scale;
                    
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    const colors = [];
                    
                    // 采样颜色（每4个像素取一个以减少计算量）
                    for (let i = 0; i < imageData.length; i += 16) {
                        const r = imageData[i];
                        const g = imageData[i + 1];
                        const b = imageData[i + 2];
                        colors.push({ r, g, b });
                    }
                    
                    // 使用 K-means 聚类找出主要颜色
                    const mainColors = this.kMeansColors(colors, 5);
                    
                    console.log('提取的主要颜色:', mainColors.map(c => this.rgbToHex(c)));
                    
                    resolve({
                        primary: this.rgbToHex(mainColors[0]),
                        accent: this.rgbToHex(mainColors[1]),
                        header: this.rgbToHex(mainColors[2])
                    });
                } catch (error) {
                    console.error('颜色分析错误:', error);
                    reject(error);
                }
            });
        },

        // 添加一个辅助方法来调整颜色亮度
        adjustColorBrightness(hex, percent) {
            const rgb = this.hexToRgb(hex);
            const adjust = (value) => {
                return Math.max(0, Math.min(255, value + (value * (percent / 100))));
            };
            
            return this.rgbToHex({
                r: Math.round(adjust(rgb.r)),
                g: Math.round(adjust(rgb.g)),
                b: Math.round(adjust(rgb.b))
            });
        },

        // 显示保存配色对话框
        showSaveThemeDialog() {
            if (!this.saveThemeDialog) {
                this.saveThemeDialog = new mdui.Dialog('#save-theme-dialog');
            }
            this.newThemeName = '';
            this.saveThemeDialog.open();
        },

        // 保存当前配色方案
        saveTheme() {
            if (!this.newThemeName.trim()) {
                this.showNotification('请输入配色方案名称', true);
                return;
            }

            const newTheme = {
                id: Date.now(),
                name: this.newThemeName,
                headerColor: this.settings.headerColor,
                primaryColor: this.settings.primaryColor,
                accentColor: this.settings.accentColor,
                timestamp: Date.now()
            };

            this.savedThemes.push(newTheme);
            this.saveSavedThemes();
            this.saveThemeDialog.close();
            this.showNotification('配色方案已保存');
        },

        // 应用保存的配色方案
        applyTheme(theme) {
            try {
                if (this.isValidColor(theme.headerColor) && 
                    this.isValidColor(theme.primaryColor) && 
                    this.isValidColor(theme.accentColor)) {
                    this.settings.headerColor = theme.headerColor;
                    this.settings.primaryColor = theme.primaryColor;
                    this.settings.accentColor = theme.accentColor;
                    this.settings.themePreset = 'custom';
                    this.updateThemeColors();
                    this.showNotification(`已应用配色方案: ${theme.name}`);
                } else {
                    throw new Error('无效的颜色值');
                }
            } catch (error) {
                console.error('应用主题失败:', error);
                this.showNotification('应用主题失败，将使用默认主题', true);
                this.resetTheme();
            }
        },

        // 删除保存的配色方案
        deleteTheme(themeId) {
            mdui.confirm('确定要删除这个配色方案吗？', '删除确认', () => {
                this.savedThemes = this.savedThemes.filter(theme => theme.id !== themeId);
                this.saveSavedThemes();
                this.showNotification('配色方案已删除');
            });
        },

        // 保存配色方案到本地存储
        saveSavedThemes() {
            localStorage.setItem('savedThemes', JSON.stringify(this.savedThemes));
        },

        // 添加颜色验证方法
        isValidColor(color) {
            if (!color) return false;
            // 检查是否是有效的十六进制颜色值
            return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
        },

        // 添加重置为默认主题的方法
        resetToDefaultTheme(silent = false) {
            const defaultTheme = this.presetThemes.default;
            this.settings.primaryColor = defaultTheme.primary;
            this.settings.accentColor = defaultTheme.accent;
            this.settings.headerColor = defaultTheme.header;
            this.settings.themePreset = 'default';
            this.updateThemeColors(silent);
        },

        // 添加加载保存数据的方法
        loadSavedData() {
            try {
                // 加载模型配置
                const savedAdvancedModels = localStorage.getItem('savedAdvancedModels');
                if (savedAdvancedModels) {
                    this.advancedModels = JSON.parse(savedAdvancedModels);
                }

                // 加载标签页
                const savedTab = localStorage.getItem('activeTab');
                if (savedTab) {
                    this.activeTab = savedTab;
                }

                // 更新气泡索引
                this.updateCurrentBubbleIndex();
            } catch (error) {
                console.error('加载保存的数据失败:', error);
            }
        },

        // 修改 saveSettings 方法
        saveSettings(silent = false) {
            try {
                localStorage.setItem('chatSettings', JSON.stringify(this.settings));
                if (!silent) { // 只在非静默模式下显示通知
                    this.showNotification('设置已保存');
                }
            } catch (error) {
                console.error('保存设置失败:', error);
                if (!silent) {
                    this.showNotification('保存设置失败', true);
                }
            }
        },

        // 添加基本样式应用方法
        applyBaseStyles() {
            const root = document.documentElement;
            const defaultTheme = this.presetThemes.default;

            // 设置基本 CSS 变量
            root.style.setProperty('--primary-color', defaultTheme.primary);
            root.style.setProperty('--accent-color', defaultTheme.accent);
            root.style.setProperty('--header-color', defaultTheme.header);

            // 添加基本 MDUI 类
            document.body.classList.add('mdui-theme-primary-indigo', 'mdui-theme-accent-pink');
        },

        // 添加用户主题加载方法
        loadUserTheme() {
            try {
                const savedTheme = localStorage.getItem('currentTheme');
                if (savedTheme) {
                    const theme = JSON.parse(savedTheme);
                    
                    // 验证颜色值
                    if (this.isValidColor(theme.headerColor) && 
                        this.isValidColor(theme.primaryColor) && 
                        this.isValidColor(theme.accentColor)) {
                        
                        // 更新设置
                        this.settings.headerColor = theme.headerColor;
                        this.settings.primaryColor = theme.primaryColor;
                        this.settings.accentColor = theme.accentColor;
                        this.settings.themePreset = theme.themePreset || 'custom';

                        // 应用主题（静默模式）
                        this.updateThemeColors(true);
                    }
                }
                
                // 标记主题已加载
                this.themeLoaded = true;
            } catch (error) {
                console.warn('加载用户主题失败，使用默认主题:', error);
            }
        },

        // 更新自定义样式
        updateCustomStyles() {
            // 添加自定义样式
            let style = document.getElementById('custom-theme-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'custom-theme-style';
                document.head.appendChild(style);
            }

            style.textContent = `
                .mdui-switch input[type=checkbox]:checked+.mdui-switch-icon {
                    background-color: ${this.settings.primaryColor} !important;
                    border-color: ${this.settings.primaryColor} !important;
                }
                .mdui-checkbox input[type=checkbox]:checked+.mdui-checkbox-icon {
                    border-color: ${this.settings.primaryColor} !important;
                    background-color: ${this.settings.primaryColor} !important;
                }
                .mdui-select-selected {
                    color: ${this.settings.primaryColor} !important;
                }
                .mdui-btn:hover {
                    background-color: ${this.adjustColorBrightness(this.settings.primaryColor, -10)} !important;
                }
                .mdui-textfield-focus .mdui-textfield-input {
                    border-bottom-color: ${this.settings.primaryColor} !important;
                }
            `;
        },

        // 添加一个统一的存储处理方法
        saveToStorage(key, value, fallback = true) {
            try {
                // 1. 尝试使用 localStorage
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.warn(`localStorage 存储失败 (${key}):`, error);
                
                if (fallback) {
                    try {
                        // 2. 尝试使用 sessionStorage 作为备选
                        sessionStorage.setItem(key, JSON.stringify(value));
                    } catch (e) {
                        console.error(`存储完全失败 (${key}):`, e);
                    }
                }
            }
        },

        // 添加一个统一的读取方法
        loadFromStorage(key) {
            try {
                // 1. 先尝试从 localStorage 读取
                const data = localStorage.getItem(key);
                if (data) {
                    return JSON.parse(data);
                }

                // 2. 如果 localStorage 没有，尝试从 sessionStorage 读取
                const sessionData = sessionStorage.getItem(key);
                if (sessionData) {
                    return JSON.parse(sessionData);
                }

                return null;
            } catch (error) {
                console.error(`读取存储失败 (${key}):`, error);
                return null;
            }
        },

        // 修改保存主题设置的方法
        saveThemeSettings() {
            const themeData = {
                headerColor: this.settings.headerColor,
                primaryColor: this.settings.primaryColor,
                accentColor: this.settings.accentColor,
                themePreset: this.settings.themePreset,
                timestamp: Date.now()
            };
            
            this.saveToStorage('currentTheme', themeData);
            
            // 同时保存到 cookie 作为额外备份
            document.cookie = `theme=${JSON.stringify(themeData)};path=/;max-age=31536000`;
        },

        // 修改加载主题设置的方法
        loadUserTheme() {
            try {
                // 1. 尝试从存储中读取
                let theme = this.loadFromStorage('currentTheme');

                // 2. 如果没有，尝试从 cookie 读取
                if (!theme) {
                    const cookies = document.cookie.split(';');
                    const themeCookie = cookies.find(c => c.trim().startsWith('theme='));
                    if (themeCookie) {
                        theme = JSON.parse(themeCookie.split('=')[1]);
                    }
                }

                if (theme && this.isValidTheme(theme)) {
                    this.settings.headerColor = theme.headerColor;
                    this.settings.primaryColor = theme.primaryColor;
                    this.settings.accentColor = theme.accentColor;
                    this.settings.themePreset = theme.themePreset || 'custom';
                    this.updateThemeColors(true);
                }

                this.themeLoaded = true;
            } catch (error) {
                console.warn('加载主题失败，使用默认主题:', error);
                this.applyDefaultTheme();
            }
        },

        // 添加主题验证方法
        isValidTheme(theme) {
            return theme &&
                this.isValidColor(theme.headerColor) &&
                this.isValidColor(theme.primaryColor) &&
                this.isValidColor(theme.accentColor);
        },

        // 修改保存设置的方法
        saveSettings(silent = false) {
            try {
                this.saveToStorage('chatSettings', this.settings);
                
                // 保存关键设置到 cookie
                const essentialSettings = {
                    fontSize: this.settings.fontSize,
                    themePreset: this.settings.themePreset,
                    darkMode: this.darkMode
                };
                document.cookie = `settings=${JSON.stringify(essentialSettings)};path=/;max-age=31536000`;

                if (!silent) {
                    this.showNotification('设置已保存');
                }
            } catch (error) {
                console.error('保存设置失败:', error);
                if (!silent) {
                    this.showNotification('保存设置失败', true);
                }
            }
        },
        getFontSize() {
            switch (this.settings.fontSize) {
                case 'small':
                    return '14px';
                case 'medium':
                    return '16px';
                case 'large':
                    return '18px';
                default:
                    return '16px';
            }
        },
        resetToDefaultSettings() {
            this.settings = {
                fontSize: 'medium',
                enableNotifications: true,
                autoScroll: true,
                expandMessages: false,
                copyMarkdown: false,
                showElevator: true,
                showContentSummary: true,
                contentSummaryModel: '🌘Moonshot',
                autoSummaryThreshold: 18,
                enableAutoSummary: true,
                copyLatex: false,
                themePreset: 'default',
                primaryColor: '#3f51b5',
                accentColor: '#ff4081',
                headerColor: '#007bff',
                customTheme: null
            };
            this.applySettings();
        },
        // 应用默认设置
        applyDefaultSettings() {
            const defaultSettings = {
                fontSize: 'medium',
                enableNotifications: true,
                autoScroll: true,
                expandMessages: false,
                copyMarkdown: false,
                showElevator: true,
                showContentSummary: true,
                contentSummaryModel: '🌘Moonshot',
                autoSummaryThreshold: 18,
                enableAutoSummary: true,
                copyLatex: false,
                themePreset: 'default',
                primaryColor: '#3f51b5',
                accentColor: '#ff4081',
                headerColor: '#007bff'
            };

            // 应用默认设置
            this.settings = { ...defaultSettings };
            
            // 应用基本样式
            document.documentElement.style.setProperty('--base-font-size', this.getFontSize());
            document.documentElement.style.setProperty('--primary-color', this.settings.primaryColor);
            document.documentElement.style.setProperty('--accent-color', this.settings.accentColor);
            document.documentElement.style.setProperty('--header-color', this.settings.headerColor);
        },

        // 加载所有用户设置
        async loadAllUserSettings() {
            try {
                // 1. 尝试从 localStorage 加载
                const localSettings = this.loadFromStorage('chatSettings');
                
                // 2. 尝试从 cookie 加载（作为备选）
                const cookieSettings = this.loadFromCookie('userSettings');
                
                // 3. 合并设置，优先使用 localStorage 的设置
                const savedSettings = localSettings || cookieSettings;

                if (savedSettings) {
                    // 更新设置
                    Object.assign(this.settings, savedSettings);

                    // 应用深色模式
                    if (savedSettings.darkMode !== undefined) {
                        this.darkMode = savedSettings.darkMode;
                        this.applyDarkMode();
                    }

                    // 应用所有设置
                    await this.applyAllSettings(true);
                }

                // 设置加载完成标志
                this.settingsLoaded = true;

            } catch (error) {
                console.error('加载设置失败:', error);
                throw error;
            }
        },

        // 从 cookie 加载设置
        loadFromCookie(name) {
            try {
                const cookies = document.cookie.split(';');
                const targetCookie = cookies.find(c => c.trim().startsWith(`${name}=`));
                if (targetCookie) {
                    return JSON.parse(decodeURIComponent(targetCookie.split('=')[1]));
                }
            } catch (error) {
                console.warn('从 cookie 加载设置失败:', error);
            }
            return null;
        },

        // 保存设置时同时保存到多个位置
        saveSettings(silent = false) {
            try {
                const settingsToSave = {
                    ...this.settings,
                    darkMode: this.darkMode,
                    lastUpdated: Date.now()
                };

                // 1. 保存到 localStorage
                this.saveToStorage('chatSettings', settingsToSave);

                // 2. 保存到 cookie（作为备份）
                const cookieStr = encodeURIComponent(JSON.stringify(settingsToSave));
                document.cookie = `userSettings=${cookieStr};path=/;max-age=31536000;SameSite=Lax`;

                // 3. 应用设置
                this.applyAllSettings(silent);

                if (!silent) {
                    this.showNotification('设置已保存');
                }
            } catch (error) {
                console.error('保存设置失败:', error);
                if (!silent) {
                    this.showNotification('保存设置失败', true);
                }
            }
        },

        // 应用所有设置
        async applyAllSettings(silent = false) {
            // 应用字体大小
            document.documentElement.style.setProperty('--base-font-size', this.getFontSize());

            // 应用主题设置
            await this.updateThemeColors(true);

            // 应用其他视觉设置
            document.body.classList.toggle('expand-messages', this.settings.expandMessages);
            document.body.classList.toggle('show-elevator', this.settings.showElevator);

            if (!silent) {
                this.showNotification('设置已应用');
            }
        },

        // 初始化数据库
        initDB() {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open('LLMsSettings', 1);

                request.onerror = () => {
                    console.error('数据库打开失败');
                    reject(request.error);
                };

                request.onsuccess = () => {
                    this.db = request.result;
                    resolve(this.db);
                };

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains('settings')) {
                        db.createObjectStore('settings', { keyPath: 'id' });
                    }
                };
            });
        },

        // 保存设置到 IndexedDB
        async saveSettingsToDB(silent = false) {
            try {
                const db = await this.getDB();
                const transaction = db.transaction(['settings'], 'readwrite');
                const store = transaction.objectStore('settings');

                const settingsToSave = {
                    id: 'userSettings',
                    data: {
                        ...this.settings,
                        darkMode: this.darkMode,
                        lastUpdated: Date.now()
                    }
                };

                await new Promise((resolve, reject) => {
                    const request = store.put(settingsToSave);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(request.error);
                });

                // 应用设置
                this.applySettings(silent);

                if (!silent) {
                    this.showNotification('设置已保存');
                }
            } catch (error) {
                console.error('保存设置失败:', error);
                if (!silent) {
                    this.showNotification('保存设置失败', true);
                }
            }
        },

        // 从 IndexedDB 加载设置
        async loadSettingsFromDB() {
            try {
                const db = await this.getDB();
                const transaction = db.transaction(['settings'], 'readonly');
                const store = transaction.objectStore('settings');

                const settings = await new Promise((resolve, reject) => {
                    const request = store.get('userSettings');
                    request.onsuccess = () => resolve(request.result);
                    request.onerror = () => reject(request.error);
                });

                if (settings && settings.data) {
                    // 更新设置
                    Object.assign(this.settings, settings.data);
                    
                    // 应用深色模式
                    if (settings.data.darkMode !== undefined) {
                        this.darkMode = settings.data.darkMode;
                    }

                    // 应用设置
                    this.applySettings(true);
                }
            } catch (error) {
                console.error('加载设置失败:', error);
                // 如果加载失败，使用默认设置
                this.applyDefaultSettings();
            }
        },

        // 获取数据库实例
        async getDB() {
            if (!this.db) {
                await this.initDB();
            }
            return this.db;
        },

        // 修改 mounted 钩子
        mounted() {
            this.$nextTick(async () => {
                try {
                    // 1. 先应用默认设置
                    this.applyDefaultSettings();

                    // 2. 初始化数据库并加载设置
                    await this.initDB();
                    await this.loadSettingsFromDB();

                    // 3. 初始化其他功能
                    this.initChat();
                    this.loadSavedData();

                } catch (error) {
                    console.error('初始化失败:', error);
                    this.applyDefaultSettings();
                }
            });
        },

        // 修改保存设置的方法
        saveSettings(silent = false) {
            this.saveSettingsToDB(silent);
        },

        sendRequestLink(model) {
            let messages = [];
            let conversation = '';
            
            // 如果是多轮对话模式,添加历史消息
            if (this.activeModel === model.name) {
                conversation = this.messages
                    .filter(msg => msg.model === model.name || msg.type === 'user-bubble')
                    .map(msg => {
                        if (msg.type === 'user-bubble') {
                            return `Human: ${msg.rawContent}`;
                        } else {
                            return `Assistant: ${msg.rawContent}`;
                        }
                    })
                    .join('\n\n');
                
                conversation += `\n\nHuman: ${this.question}`;
            }

            // 使用代理服务器URL
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const targetUrl = encodeURIComponent(`${model.url}?msg=${encodeURIComponent(this.activeModel === model.name ? conversation : this.question)}`);
            const url = proxyUrl + targetUrl;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        return response.text().then(text => {
                            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(proxyResponse => {
                    // 代理服务器返回的数据在 contents 字段中，需要解析
                    const data = JSON.parse(proxyResponse.contents);
                    
                    model.loading = false;
                    if (data.code === 200 && data.data && data.data.answer) {
                        const aiResponse = {
                            id: Date.now() + Math.random(),
                            content: this.processMessageContent(data.data.answer),
                            rawContent: data.data.answer,
                            type: 'ai-bubble',
                            model: model.name,
                        };
                        this.messages.push(aiResponse);
                        this.scrollToBottom();
                        this.saveCurrentChat();
                        this.saveChatHistory();
                        
                        // 检查是否需要触发自动总结
                        this.checkAutoSummary(aiResponse);
                        
                        // 显示通知
                        this.showNotification(`${model.name} 已响应`);
                    } else {
                        throw new Error(data.msg || 'Invalid response from server');
                    }
                })
                .catch(error => {
                    model.loading = false;
                    model.error = error.message;
                    console.error('Error:', error);
                    this.showNotification(`${model.name} 请求失败: ${error.message}`, true);
                });
        },

        shareTheme(theme) {
            try {
                // 创建一个包含主题数据的对象
                const shareData = {
                    name: theme.name,
                    headerColor: theme.headerColor,
                    primaryColor: theme.primaryColor,
                    accentColor: theme.accentColor,
                    timestamp: Date.now()
                };
                
                // 使用 encodeURIComponent 处理 JSON 字符串
                const encodedData = encodeURIComponent(JSON.stringify(shareData));
                
                // 生成分享链接
                const shareUrl = `${window.location.origin}${window.location.pathname}?theme=${encodedData}`;
                
                // 复制链接到剪贴板
                navigator.clipboard.writeText(shareUrl).then(() => {
                    this.showNotification('分享链接已复制到剪贴板');
                });
            } catch (error) {
                console.error('生成分享链接失败:', error);
                this.showNotification('生成分享链接失败', true);
            }
        },

        handleSharedTheme(themeParam) {
            try {
                console.log('Processing shared theme...');
                const theme = JSON.parse(decodeURIComponent(themeParam));
                console.log('Parsed theme:', theme);

                // 等待 MDUI 加载
                if (typeof mdui === 'undefined') {
                    console.log('MDUI not loaded, retrying in 500ms...');
                    setTimeout(() => this.handleSharedTheme(themeParam), 500);
                    return;
                }

                // 验证主题数据
                if (!theme || typeof theme !== 'object' || !theme.headerColor || !theme.primaryColor || !theme.accentColor) {
                    throw new Error('Invalid theme data');
                }

                // 使用 MDUI 的 Dialog API
                mdui.dialog({
                    title: '检测到主题分享',
                    content: `
                        <div class="mdui-dialog-content">
                            <p>检测到主题配色方案"${theme.name || '未命名主题'}"，您想要：</p>
                            <div class="theme-preview" style="
                                margin: 16px 0;
                                padding: 16px;
                                border-radius: 8px;
                                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.accentColor});
                                color: white;
                                text-align: center;
                            ">
                                主题预览
                            </div>
                        </div>
                    `,
                    buttons: [
                        {
                            text: '取消'
                        },
                        {
                            text: '仅应用',
                            onClick: () => {
                                this.settings.headerColor = theme.headerColor;
                                this.settings.primaryColor = theme.primaryColor;
                                this.settings.accentColor = theme.accentColor;
                                this.updateThemeColors();
                                this.showNotification('已应用分享的主题配色');
                                // 清空输入框
                                this.themeImportInput = '';
                            }
                        },
                        {
                            text: '保存主题',
                            bold: true,
                            onClick: () => {
                                const newTheme = {
                                    id: Date.now(),
                                    name: theme.name || '分享的主题',
                                    headerColor: theme.headerColor,
                                    primaryColor: theme.primaryColor,
                                    accentColor: theme.accentColor,
                                    timestamp: Date.now()
                                };
                                
                                this.savedThemes.push(newTheme);
                                this.saveSavedThemes();
                                
                                this.settings.headerColor = theme.headerColor;
                                this.settings.primaryColor = theme.primaryColor;
                                this.settings.accentColor = theme.accentColor;
                                this.updateThemeColors();
                                
                                this.showNotification('已保存并应用主题配色');
                                // 清空输入框
                                this.themeImportInput = '';
                            }
                        }
                    ],
                    history: false,
                    modal: true,
                    closeOnEsc: true
                });

            } catch (error) {
                console.error('处理主题分享失败:', error);
                console.log('Error details:', {
                    message: error.message,
                    stack: error.stack
                });
                this.showNotification('处理主题分享失败', true);
                
                // 清除 URL 参数
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            }
        },
        parseThemeLink() {
            try {
                if (!this.themeImportInput) {
                    this.showNotification('请输入主题分享链接', true);
                    return;
                }

                // 尝试从链接中提取主题参数
                const url = new URL(this.themeImportInput);
                const themeParam = url.searchParams.get('theme');
                
                if (!themeParam) {
                    this.showNotification('无效的主题分享链接', true);
                    return;
                }

                const theme = JSON.parse(decodeURIComponent(themeParam));
                
                // 验证主题数据
                if (!theme || typeof theme !== 'object' || !theme.headerColor || !theme.primaryColor || !theme.accentColor) {
                    throw new Error('Invalid theme data');
                }

                // 使用 MDUI 的 Dialog API
                mdui.dialog({
                    title: '检测到主题配色',
                    content: `
                        <div class="mdui-dialog-content">
                            <p>检测到主题配色方案"${theme.name || '未命名主题'}"，您想要：</p>
                            <div class="theme-preview" style="
                                margin: 16px 0;
                                padding: 16px;
                                border-radius: 8px;
                                background: linear-gradient(45deg, ${theme.primaryColor}, ${theme.accentColor});
                                color: white;
                                text-align: center;
                            ">
                                主题预览
                            </div>
                        </div>
                    `,
                    buttons: [
                        {
                            text: '取消'
                        },
                        {
                            text: '仅应用',
                            onClick: () => {
                                this.settings.headerColor = theme.headerColor;
                                this.settings.primaryColor = theme.primaryColor;
                                this.settings.accentColor = theme.accentColor;
                                this.updateThemeColors();
                                this.showNotification('已应用分享的主题配色');
                                // 清空输入框
                                this.themeImportInput = '';
                            }
                        },
                        {
                            text: '保存主题',
                            bold: true,
                            onClick: () => {
                                const newTheme = {
                                    id: Date.now(),
                                    name: theme.name || '分享的主题',
                                    headerColor: theme.headerColor,
                                    primaryColor: theme.primaryColor,
                                    accentColor: theme.accentColor,
                                    timestamp: Date.now()
                                };
                                
                                this.savedThemes.push(newTheme);
                                this.saveSavedThemes();
                                
                                this.settings.headerColor = theme.headerColor;
                                this.settings.primaryColor = theme.primaryColor;
                                this.settings.accentColor = theme.accentColor;
                                this.updateThemeColors();
                                
                                this.showNotification('已保存并应用主题配色');
                                // 清空输入框
                                this.themeImportInput = '';
                            }
                        }
                    ],
                    history: false,
                    modal: true,
                    closeOnEsc: true
                });

            } catch (error) {
                console.error('解析主题链接失败:', error);
                this.showNotification('解析主题链接失败', true);
            }
        }
    },
    watch: {
        models: {
            handler(newModels) {
                const allSelected = newModels.every(model => model.selected);
                if (this.allSelected !== allSelected) {
                    this.allSelected = allSelected;
                }
            },
            deep: true,
        },
        darkMode: {
            handler() {
                this.$nextTick(() => {
                    // 确保欢迎消息的颜色正确适应主题
                    const welcomeContainer = document.querySelector('.welcome-container');
                    if (welcomeContainer) {
                        welcomeContainer.style.color = this.darkMode ? 
                            'var(--text-color)' : 'var(--text-color)';
                    }
                });
            }
        },
        messages: {
            handler() {
                // 只在消息为空时重置索引
                if (this.messages.length === 0) {
                    this.currentBubbleIndex = 0;
                }
            },
            deep: true
        },
        // 监听选中状态变化
        chatHistory: {
            deep: true,
            handler(newHistory) {
                if (this.isSelectMode) {
                    this.isAllSelected = newHistory.length > 0 && 
                        newHistory.every(session => session.selected);
                }
            }
        },
        // 监听基础模型的选择状态
        'models': {
            deep: true,
            handler(newModels) {
                this.basicAllSelected = newModels.length > 0 && newModels.every(model => model.selected);
            }
        },
        
        // 监听高级模型的选择状态
        'advancedModels': {
            deep: true,
            handler(newModels) {
                this.advancedAllSelected = newModels.length > 0 && newModels.every(model => model.selected);
            }
        }
    },
}).mount('#app');
